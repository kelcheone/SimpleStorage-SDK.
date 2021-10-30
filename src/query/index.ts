import { Ethereum_Connection } from "./w3/imported/Ethereum_Connection/index";
import {
  Ethereum_Query,
  Ipfs_Query,
  Input_getData,
  Input_getIpfsData,
} from "./w3";

export function getData(input: Input_getData): u32 {
  const res = Ethereum_Query.callContractView({
    address: input.address,
    method: "function get() view returns (uint256)",
    args: null,
    connection: input.connection,
  });

  return U32.parseInt(res);
}
export function getIpfsData(input: Input_getIpfsData): String {
  const hash = Ethereum_Query.callContractView({
    address: input.address,
    method: "function getHash() view returns (string)",
    args: [],
    connection: input.connection,
  });

  return String.UTF8.decode(Ipfs_Query.catFile({ cid: hash }));
}
