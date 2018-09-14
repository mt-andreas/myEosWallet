import './../../shim';

import eos from 'eosjs';

const KEY = "5KQwrPbwdL6PhXujxW37FSSQZ1JiwsST4cqQzDeyXtP79zkvFD3";
const RPC_API_URL = "http://eos.eosza.io:8888";

export function get_net(){
  config = {
    //keyProvider: KEY, // WIF string or array of keys..
    httpEndpoint: RPC_API_URL
  }

  local_net = eos(config);
  return local_net
}


export function get_info(){
	let net = get_net().getInfo({}).then(info => {
		return info;
	});
	return net;
}

export const getAccountInfo = (account, uid) => {
  let net = get_net();//.getAccount(account);
  return {data: net.getAccount(account).then(info => {return info;}), uid};
  //return net;
}