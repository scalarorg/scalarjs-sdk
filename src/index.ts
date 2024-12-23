export function printMsg(): void {
  console.log("This is a message from the demo package");
}

export { getProtocols } from "./services/protocol";
export { Status } from "./generated/scalar/protocol/v1beta1/types";
export { Protocol } from "./generated/scalar/protocol/v1beta1/types";
