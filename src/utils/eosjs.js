
import './../../shim.js';

import eos from 'eosjs'

const KEY = "5KQwrPbwdL6PhXujxW37FSSQZ1JiwsST4cqQzDeyXtP79zkvFD3";
const RPC_API_URL = "http://167.99.181.173:8888";

export function get_net(){
  config = {
    keyProvider: KEY, // WIF string or array of keys..
    httpEndpoint: RPC_API_URL
  }

  local_net = eos(config);
  return local_net
}


export function get_info(){
	let net = get_net();
	return net.getInfo({}).then(info => {
		return info;
	});
}


/*import { Api, Rpc, SignatureProvider } from 'eosjs2'; // https://github.com/EOSIO/eosjs2

export const test =  async() => {
debugger;
  const rpc = new Rpc.JsonRpc(endpoint);
    const signatureProvider = new SignatureProvider([privateKey]);
    const api = new Api({ rpc, signatureProvider });
    try {
      const result = await api.transact({
        actions: [{
          account: "notechainacc",
          name: actionName,
          authorization: [{
            actor: account,
            permission: 'active',
          }],
          data: actionData,
        }]
      }, {
        blocksBehind: 3,
        expireSeconds: 30,
      });

      console.log(result);
      return result;
    } catch (e) {
      console.log('Caught exception: ' + e);
      if (e instanceof Rpc.RpcError) {
        console.log(JSON.stringify(e.json, null, 2));
      }
    }
}*/
