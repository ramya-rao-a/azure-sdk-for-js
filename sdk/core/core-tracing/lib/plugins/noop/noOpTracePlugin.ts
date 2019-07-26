import { Tracer } from "../../interfaces/tracer";
import { Span } from "../../interfaces/span";
import { SpanOptions } from "../../interfaces/SpanOptions";

export class NoOpTracePlugin implements Tracer {
  private _tracer: any;

  public constructor(tracer: any) {
    this._tracer = tracer;
  }

  getCurrentSpan(): Span {
    throw new Error("Method not implemented.");
  }
  startSpan(name: string, options?: SpanOptions | undefined): Span {
    throw new Error("Method not implemented.");
  }
  withSpan<T extends (...args: unknown[]) => unknown>(span: Span, fn: T): ReturnType<T> {
    throw new Error("Method not implemented.");
  }
  recordSpanData(span: Span): void {
    throw new Error("Method not implemented.");
  }
  getBinaryFormat(): unknown {
    throw new Error("Method not implemented.");
  }
  getHttpTextFormat(): unknown {
    throw new Error("Method not implemented.");
  }
}
