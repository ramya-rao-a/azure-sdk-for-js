import { PartitionContext } from "./partitionContext";
import { CheckpointManager } from "./checkpointManager";
import { CloseReason } from "./eventProcessor";
import { ReceivedEventData } from "./eventData";

/**
 * The `PartitionProcessor` is responsible for processing events received from Event Hubs when using `EventProcessor`
 *
 * The EventProcessor creates a new instance of the PartitionProcessor for each partition of the event hub it starts processing. When you extend the `PartitionProcessor` in order to customize it as you see fit,
 * - Use the `processEvents()` method to add the code to process the received events. This is also a good place to update the checkpoints.
 * - Use the `processError()` method to handle any error that might have occurred when processing the events.
 * - Use the `initialize()` method to implement any set up related tasks you would want to carry out before starting to receive events from the partition
 * - Use the `close()` method to implement any tear down or clean up tasks you would want to carry out.
 */
export class PartitionProcessor {
  private _partitionContext: PartitionContext;
  private _checkpointManager: CheckpointManager;

  constructor(partitionContext: PartitionContext) {
    this._checkpointManager = partitionContext.checkpointManager;
    this._partitionContext = partitionContext;
  }

  /**
   * An object that provides information specific to the partition being processed. This will have properties like the `partitionId`, `eventHubName` and `consumerGroupName`.
   */
  get context(): PartitionContext {
    return this._partitionContext;
  }

  /**
   * This method is called when the `EventProcessor` takes ownership of a new partition and before any
   * events are received.
   *
   * @return {Promise<void>}
   */
  async initialize(): Promise<void> { }

  /**
   * This method is called before the partition processor is closed by the EventProcessor.
   *
   * @param reason The reason for closing this partition processor.
   * @return {Promise<void>}
   */
  async close(reason: CloseReason): Promise<void> { }

  /**
   * This method is called when new events are received.
   *
   * This is also a good place to update checkpoints as appropriate.
   *
   * @param events The received events to be processed.
   * @return {Promise<void>}
   */
  async processEvents(events: ReceivedEventData[]): Promise<void> { }

  /**
   * This method is called when an error occurs while receiving events from Event Hubs.
   *
   * @param error The error to be processed.
   * @return {Promise<void>}
   */
  async processError(error: Error): Promise<void> { }
  /**
  * Use this method to update the checkpoint with the given event
  */
  async updateCheckpoint(eventData: ReceivedEventData): Promise<void> {
    return this._checkpointManager.updateCheckpoint(eventData);
  }
}
