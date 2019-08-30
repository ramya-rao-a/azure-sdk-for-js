import { PartitionContext } from "./partitionContext";
import { CheckpointManager } from "./checkpointManager";
import { CloseReason } from "./eventProcessor";
import { ReceivedEventData } from "./eventData";

/**
 * The `PartitionProcessor` is responsible for processing events received from Event Hubs when using `EventProcessor`
 *
 * An instance of `PartitionProcessor` is created anytime an EventProcessor begins receiving messages from a partition.
 *
 */
export class PartitionProcessor {
  private _partitionContext: PartitionContext;
  private _checkpointManager: CheckpointManager;

  constructor(partitionContext: PartitionContext) {
    this._checkpointManager = partitionContext.checkpointManager;
    this._partitionContext = partitionContext;
  }

  /**
   * An object that provides information specific to the partition being processed.
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

  async updateCheckpoint(eventData: ReceivedEventData): Promise<void> {
    return this._checkpointManager.updateCheckpoint(eventData);
  }
}
