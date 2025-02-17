/* eslint-disable prefer-const */
import { Address, BigInt, Bytes } from "@graphprotocol/graph-ts";

import {
  RootPropagated as RootPropagatedEvent,
  RootReceived as RootReceivedEvent,
  RootsAggregated as RootsAggregatedEvent,
  ConnectorAdded as ConnectorAddedEvent,
} from "../../../generated/RootManager/RootManager";
import { RootPropagated, AggregatedMessageRoot, RootAggregated, RootManagerMeta } from "../../../generated/schema";

const ROOT_MANAGER_META_ID = "ROOT_MANAGER_META_ID";

/// MARK - ROOT MANAGER
// TODO: Needed?
export function handleRootReceived(event: RootReceivedEvent): void {
  let instance = RootAggregated.load(event.params.receivedRoot.toHexString());
  if (instance == null) {
    instance = new RootAggregated(event.params.receivedRoot.toHexString());
  }

  instance.domain = event.params.domain;
  instance.receivedRoot = event.params.receivedRoot;
  instance.index = event.params.queueIndex;

  instance.save();
}

export function handleRootsAggregated(event: RootsAggregatedEvent): void {
  const key = event.params.aggregateRoot.toHexString();
  const numMessageRootsAggregated = event.params.aggregatedMessageRoots.length;
  // Pre-count = the number of nodes in the tree *before* we inserted these message root nodes.
  const aggregateTreePreCount = event.params.count.minus(BigInt.fromI32(numMessageRootsAggregated));
  for (let i = 0; i < numMessageRootsAggregated; i++) {
    const leaf = event.params.aggregatedMessageRoots[i].toHexString();
    // Index of insertion for each leaf will be (whatever the aggregate tree count was before
    // insertion of all these message roots) + index in the array of message roots.
    const index = aggregateTreePreCount.plus(BigInt.fromI32(i));

    let instance = AggregatedMessageRoot.load(`${key}-${index}`); // Should ALWAYS be null.
    if (instance == null) {
      instance = new AggregatedMessageRoot(`${key}-${index}`);
    }

    let rootAggregatedInstance = RootAggregated.load(leaf);
    instance.domain = rootAggregatedInstance!.domain;
    instance.index = index;
    instance.receivedRoot = Bytes.fromHexString(leaf);
    instance.save();
  }
}

export function handleRootPropagated(event: RootPropagatedEvent): void {
  const key = event.params.aggregateRoot.toHexString();
  // Create the RootPropagated entity: this is used to track aggregate roots / propagated
  // snapshots for the sake of proof generation off-chain.
  let instance = RootPropagated.load(key);
  // This should ALWAYS be null. Sending the same agg root twice is not possible in current
  // construction.
  if (instance == null) {
    instance = new RootPropagated(key);
  }
  instance.aggregate = event.params.aggregateRoot;
  instance.domainsHash = event.params.domainsHash;
  instance.count = event.params.count;

  instance.save();
}

export function handleConnectorAdded(event: ConnectorAddedEvent): void {
  let instance = RootManagerMeta.load(ROOT_MANAGER_META_ID);
  if (instance == null) {
    instance = new RootManagerMeta(ROOT_MANAGER_META_ID);
  }
  instance.domains = event.params.domains;
  instance.connectors = event.params.connectors.map<Bytes>((c: Address): Bytes => Bytes.fromHexString(c.toHexString()));

  instance.save();
}
