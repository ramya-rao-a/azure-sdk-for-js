let nock = require('nock');

module.exports.testInfo = {}

nock('https://login.microsoftonline.com:443', {"encodedQueryParams":true})
  .post('/azure_tenant_id/oauth2/v2.0/token', "response_type=token&grant_type=client_credentials&client_id=azure_client_id&client_secret=azure_client_secret&scope=https%3A%2F%2Fvault.azure.net%2F.default")
  .reply(200, {"token_type":"Bearer","expires_in":3599,"ext_expires_in":3599,"access_token":"access_token"}, [ 'Cache-Control',
  'no-cache, no-store',
  'Pragma',
  'no-cache',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'x-ms-request-id',
  '8248a8e4-da2e-445d-a1cd-64f3452b1400',
  'P3P',
  'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'Set-Cookie',
  'fpc=AlxoK2YysldNhaO7C2o1m_0_aSJHAgAAAPVemtQOAAAA; expires=Thu, 18-Jul-2019 04:27:26 GMT; path=/; secure; HttpOnly',
  'Set-Cookie',
  'x-ms-gateway-slice=prod; path=/; secure; HttpOnly',
  'Set-Cookie',
  'stsservicecookie=ests; path=/; secure; HttpOnly',
  'Date',
  'Tue, 18 Jun 2019 04:27:26 GMT',
  'Connection',
  'close',
  'Content-Length',
  '1231' ]);


nock('https://keyvault_name.vault.azure.net:443', {"encodedQueryParams":true})
  .put('/secrets/listSecretName0', {"value":"RSA"})
  .query(true)
  .reply(200, {"value":"RSA","id":"https://keyvault_name.vault.azure.net/secrets/listSecretName0/5ae025ba6318462f95c3af19bd38f244","attributes":{"enabled":true,"created":1560832054,"updated":1560832054,"recoveryLevel":"Recoverable+Purgeable"}}, [ 'Cache-Control',
  'no-cache',
  'Pragma',
  'no-cache',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'Server',
  'Microsoft-IIS/10.0',
  'x-ms-keyvault-region',
  'westus',
  'x-ms-request-id',
  'e10878b0-ffee-43ae-8e08-ec45c9745a16',
  'x-ms-keyvault-service-version',
  '1.1.0.866',
  'x-ms-keyvault-network-info',
  'addr=108.226.109.105;act_addr_fam=InterNetwork;',
  'X-AspNet-Version',
  '4.0.30319',
  'X-Powered-By',
  'ASP.NET',
  'Strict-Transport-Security',
  'max-age=31536000;includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'Date',
  'Tue, 18 Jun 2019 04:27:34 GMT',
  'Connection',
  'close',
  'Content-Length',
  '227' ]);


nock('https://login.microsoftonline.com:443', {"encodedQueryParams":true})
  .post('/azure_tenant_id/oauth2/v2.0/token', "response_type=token&grant_type=client_credentials&client_id=azure_client_id&client_secret=azure_client_secret&scope=https%3A%2F%2Fvault.azure.net%2F.default")
  .reply(200, {"token_type":"Bearer","expires_in":3600,"ext_expires_in":3600,"access_token":"access_token"}, [ 'Cache-Control',
  'no-cache, no-store',
  'Pragma',
  'no-cache',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'x-ms-request-id',
  'c4042f3e-a6ed-4392-9fa1-fb3b13831300',
  'P3P',
  'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'Set-Cookie',
  'fpc=AlxoK2YysldNhaO7C2o1m_0_aSJHAwAAAPVemtQOAAAA; expires=Thu, 18-Jul-2019 04:27:43 GMT; path=/; secure; HttpOnly',
  'Set-Cookie',
  'x-ms-gateway-slice=prod; path=/; secure; HttpOnly',
  'Set-Cookie',
  'stsservicecookie=ests; path=/; secure; HttpOnly',
  'Date',
  'Tue, 18 Jun 2019 04:27:42 GMT',
  'Connection',
  'close',
  'Content-Length',
  '1231' ]);


nock('https://keyvault_name.vault.azure.net:443', {"encodedQueryParams":true})
  .put('/secrets/listSecretName1', {"value":"RSA"})
  .query(true)
  .reply(200, {"value":"RSA","id":"https://keyvault_name.vault.azure.net/secrets/listSecretName1/88c4a61b79404aa6811e564665ae9303","attributes":{"enabled":true,"created":1560832069,"updated":1560832069,"recoveryLevel":"Recoverable+Purgeable"}}, [ 'Cache-Control',
  'no-cache',
  'Pragma',
  'no-cache',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'Server',
  'Microsoft-IIS/10.0',
  'x-ms-keyvault-region',
  'westus',
  'x-ms-request-id',
  '04c64941-9bae-420e-bad6-e1a7954fc205',
  'x-ms-keyvault-service-version',
  '1.1.0.866',
  'x-ms-keyvault-network-info',
  'addr=108.226.109.105;act_addr_fam=InterNetwork;',
  'X-AspNet-Version',
  '4.0.30319',
  'X-Powered-By',
  'ASP.NET',
  'Strict-Transport-Security',
  'max-age=31536000;includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'Date',
  'Tue, 18 Jun 2019 04:27:49 GMT',
  'Connection',
  'close',
  'Content-Length',
  '227' ]);


nock('https://login.microsoftonline.com:443', {"encodedQueryParams":true})
  .post('/azure_tenant_id/oauth2/v2.0/token', "response_type=token&grant_type=client_credentials&client_id=azure_client_id&client_secret=azure_client_secret&scope=https%3A%2F%2Fvault.azure.net%2F.default")
  .reply(200, {"token_type":"Bearer","expires_in":3600,"ext_expires_in":3600,"access_token":"access_token"}, [ 'Cache-Control',
  'no-cache, no-store',
  'Pragma',
  'no-cache',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'x-ms-request-id',
  'bbebc909-1b4b-43c8-a8fe-319d04a41300',
  'P3P',
  'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'Set-Cookie',
  'fpc=AlxoK2YysldNhaO7C2o1m_0_aSJHBAAAAPVemtQOAAAA; expires=Thu, 18-Jul-2019 04:27:57 GMT; path=/; secure; HttpOnly',
  'Set-Cookie',
  'x-ms-gateway-slice=prod; path=/; secure; HttpOnly',
  'Set-Cookie',
  'stsservicecookie=ests; path=/; secure; HttpOnly',
  'Date',
  'Tue, 18 Jun 2019 04:27:56 GMT',
  'Connection',
  'close',
  'Content-Length',
  '1231' ]);


nock('https://keyvault_name.vault.azure.net:443', {"encodedQueryParams":true})
  .get('/secrets')
  .query(true)
  .reply(200, {"value":[{"id":"https://keyvault_name.vault.azure.net/secrets/listSecretName0","attributes":{"enabled":true,"created":1560832054,"updated":1560832054,"recoveryLevel":"Recoverable+Purgeable"}},{"id":"https://keyvault_name.vault.azure.net/secrets/listSecretName1","attributes":{"enabled":true,"created":1560832069,"updated":1560832069,"recoveryLevel":"Recoverable+Purgeable"}},{"id":"https://keyvault_name.vault.azure.net/secrets/ExamplePassword","attributes":{"enabled":true,"created":1559920536,"updated":1559920536,"recoveryLevel":"Recoverable+Purgeable"}},{"id":"https://keyvault_name.vault.azure.net/secrets/key156035497352907352","attributes":{"enabled":true,"created":1560354978,"updated":1560354978,"recoveryLevel":"Recoverable+Purgeable"}},{"id":"https://keyvault_name.vault.azure.net/secrets/key156035503730605597","attributes":{"enabled":true,"created":1560355042,"updated":1560355042,"recoveryLevel":"Recoverable+Purgeable"}},{"id":"https://keyvault_name.vault.azure.net/secrets/key156035505405304954","attributes":{"enabled":true,"created":1560355059,"updated":1560355059,"recoveryLevel":"Recoverable+Purgeable"}},{"id":"https://keyvault_name.vault.azure.net/secrets/secret155969830299800555","attributes":{"enabled":true,"created":1559698309,"updated":1559698309,"recoveryLevel":"Recoverable+Purgeable"}},{"id":"https://keyvault_name.vault.azure.net/secrets/secret155969830501005254","attributes":{"enabled":true,"exp":32503680000,"created":1559698313,"updated":1559698313,"recoveryLevel":"Recoverable+Purgeable"}},{"id":"https://keyvault_name.vault.azure.net/secrets/secret155969830702405633","attributes":{"enabled":true,"exp":32503680000,"created":1559698314,"updated":1559698328,"recoveryLevel":"Recoverable+Purgeable"}},{"id":"https://keyvault_name.vault.azure.net/secrets/secret155969831104103177","attributes":{"enabled":true,"created":1559698345,"updated":1559698345,"recoveryLevel":"Recoverable+Purgeable"}},{"id":"https://keyvault_name.vault.azure.net/secrets/secret155969840997100376","attributes":{"enabled":true,"created":1559698415,"updated":1559698415,"recoveryLevel":"Recoverable+Purgeable"}},{"id":"https://keyvault_name.vault.azure.net/secrets/secret155969841605401224","attributes":{"enabled":true,"created":1559698422,"updated":1559698422,"recoveryLevel":"Recoverable+Purgeable"}},{"id":"https://keyvault_name.vault.azure.net/secrets/secret155969842993209999","attributes":{"enabled":true,"exp":32503680000,"created":1559698435,"updated":1559698435,"recoveryLevel":"Recoverable+Purgeable"}},{"id":"https://keyvault_name.vault.azure.net/secrets/secret155969844356809107","attributes":{"enabled":true,"exp":32503680000,"created":1559698450,"updated":1559698457,"recoveryLevel":"Recoverable+Purgeable"}},{"id":"https://keyvault_name.vault.azure.net/secrets/secret155969847359407300","attributes":{"enabled":true,"created":1559698479,"updated":1559698479,"recoveryLevel":"Recoverable+Purgeable"}},{"id":"https://keyvault_name.vault.azure.net/secrets/secret155969857586802675","attributes":{"enabled":true,"created":1559698582,"updated":1559698582,"recoveryLevel":"Recoverable+Purgeable"}},{"id":"https://keyvault_name.vault.azure.net/secrets/secret155969858938507540","attributes":{"enabled":true,"exp":32503680000,"created":1559698595,"updated":1559698595,"recoveryLevel":"Recoverable+Purgeable"}},{"id":"https://keyvault_name.vault.azure.net/secrets/secret155969860209703057","attributes":{"enabled":true,"exp":32503680000,"created":1559698608,"updated":1559698615,"recoveryLevel":"Recoverable+Purgeable"}},{"id":"https://keyvault_name.vault.azure.net/secrets/secret155969864161208327","attributes":{"enabled":true,"created":1559698661,"updated":1559698661,"recoveryLevel":"Recoverable+Purgeable"}},{"id":"https://keyvault_name.vault.azure.net/secrets/secret155974871145300045","attributes":{"enabled":true,"created":1559748717,"updated":1559748717,"recoveryLevel":"Recoverable+Purgeable"}},{"id":"https://keyvault_name.vault.azure.net/secrets/secret155974872276605440","attributes":{"enabled":true,"exp":32503680000,"created":1559748728,"updated":1559748728,"recoveryLevel":"Recoverable+Purgeable"}},{"id":"https://keyvault_name.vault.azure.net/secrets/secret155974873380306363","attributes":{"enabled":true,"exp":32503680000,"created":1559748739,"updated":1559748744,"recoveryLevel":"Recoverable+Purgeable"}},{"id":"https://keyvault_name.vault.azure.net/secrets/secret155974876803708577","attributes":{"enabled":true,"created":1559748784,"updated":1559748784,"recoveryLevel":"Recoverable+Purgeable"}}],"nextLink":"https://keyvault_name.vault.azure.net:443/secrets?api-version=7.0&$skiptoken=eyJOZXh0TWFya2VyIjoiMiExMDAhTURBd01ETXhJWE5sWTNKbGRDOVRSVU5TUlZReE5UVTVOell5TmpjM01EQTNNRE14TkRZaE1EQXdNREk0SVRrNU9Ua3RNVEl0TXpGVU1qTTZOVGs2TlRrdU9UazVPVGs1T1ZvaCIsIlRhcmdldExvY2F0aW9uIjowfQ"}, [ 'Cache-Control',
  'no-cache',
  'Pragma',
  'no-cache',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'Server',
  'Microsoft-IIS/10.0',
  'x-ms-keyvault-region',
  'westus',
  'x-ms-request-id',
  '769633e5-87f1-4968-8992-35adfdfc4b35',
  'x-ms-keyvault-service-version',
  '1.1.0.866',
  'x-ms-keyvault-network-info',
  'addr=108.226.109.105;act_addr_fam=InterNetwork;',
  'X-AspNet-Version',
  '4.0.30319',
  'X-Powered-By',
  'ASP.NET',
  'Strict-Transport-Security',
  'max-age=31536000;includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'Date',
  'Tue, 18 Jun 2019 04:28:03 GMT',
  'Connection',
  'close',
  'Content-Length',
  '4768' ]);


nock('https://login.microsoftonline.com:443', {"encodedQueryParams":true})
  .post('/azure_tenant_id/oauth2/v2.0/token', "response_type=token&grant_type=client_credentials&client_id=azure_client_id&client_secret=azure_client_secret&scope=https%3A%2F%2Fvault.azure.net%2F.default")
  .reply(200, {"token_type":"Bearer","expires_in":3600,"ext_expires_in":3600,"access_token":"access_token"}, [ 'Cache-Control',
  'no-cache, no-store',
  'Pragma',
  'no-cache',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'x-ms-request-id',
  '32b281c4-5afb-4bb4-9ecc-3115d2cb1500',
  'P3P',
  'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'Set-Cookie',
  'fpc=AlxoK2YysldNhaO7C2o1m_0_aSJHBQAAAPVemtQOAAAA; expires=Thu, 18-Jul-2019 04:28:09 GMT; path=/; secure; HttpOnly',
  'Set-Cookie',
  'x-ms-gateway-slice=prod; path=/; secure; HttpOnly',
  'Set-Cookie',
  'stsservicecookie=ests; path=/; secure; HttpOnly',
  'Date',
  'Tue, 18 Jun 2019 04:28:08 GMT',
  'Connection',
  'close',
  'Content-Length',
  '1231' ]);


nock('https://keyvault_name.vault.azure.net:443', {"encodedQueryParams":true})
  .get('/secrets')
  .query(true)
  .reply(200, {"value":[{"id":"https://keyvault_name.vault.azure.net/secrets/secret155976267700703146","attributes":{"enabled":true,"created":1559762682,"updated":1559762682,"recoveryLevel":"Recoverable+Purgeable"}},{"id":"https://keyvault_name.vault.azure.net/secrets/secret155977987019000658","attributes":{"enabled":true,"created":1559779876,"updated":1559779876,"recoveryLevel":"Recoverable+Purgeable"}},{"id":"https://keyvault_name.vault.azure.net/secrets/secret155977987618402041","attributes":{"enabled":true,"created":1559779883,"updated":1559779883,"recoveryLevel":"Recoverable+Purgeable"}},{"id":"https://keyvault_name.vault.azure.net/secrets/secret155977989062300314","attributes":{"enabled":true,"exp":32503680000,"created":1559779896,"updated":1559779896,"recoveryLevel":"Recoverable+Purgeable"}},{"id":"https://keyvault_name.vault.azure.net/secrets/secret155977990311305514","attributes":{"enabled":true,"exp":32503680000,"created":1559779909,"updated":1559779916,"recoveryLevel":"Recoverable+Purgeable"}},{"id":"https://keyvault_name.vault.azure.net/secrets/secret155977994218208573","attributes":{"enabled":true,"created":1559779954,"updated":1559779954,"recoveryLevel":"Recoverable+Purgeable"}},{"id":"https://keyvault_name.vault.azure.net/secrets/secret155985529172800962","attributes":{"enabled":true,"created":1559855297,"updated":1559855297,"recoveryLevel":"Recoverable+Purgeable"}},{"id":"https://keyvault_name.vault.azure.net/secrets/secret155986124522104520","attributes":{"enabled":true,"created":1559861253,"updated":1559861253,"recoveryLevel":"Recoverable+Purgeable"}},{"id":"https://keyvault_name.vault.azure.net/secrets/secret155986125376001211","attributes":{"enabled":true,"created":1559861260,"updated":1559861260,"recoveryLevel":"Recoverable+Purgeable"}},{"id":"https://keyvault_name.vault.azure.net/secrets/secret155986126989703251","attributes":{"enabled":true,"exp":32503680000,"created":1559861276,"updated":1559861276,"recoveryLevel":"Recoverable+Purgeable"}},{"id":"https://keyvault_name.vault.azure.net/secrets/secret156035467744608684","attributes":{"enabled":true,"created":1560354683,"updated":1560354683,"recoveryLevel":"Recoverable+Purgeable"}},{"id":"https://keyvault_name.vault.azure.net/secrets/secret156035468319002718","attributes":{"enabled":true,"exp":32503680000,"created":1560354688,"updated":1560354688,"recoveryLevel":"Recoverable+Purgeable"}},{"id":"https://keyvault_name.vault.azure.net/secrets/secret156035469457101815","attributes":{"enabled":true,"exp":32503680000,"created":1560354700,"updated":1560354705,"recoveryLevel":"Recoverable+Purgeable"}}],"nextLink":"https://keyvault_name.vault.azure.net:443/secrets?api-version=7.0&$skiptoken=eyJOZXh0TWFya2VyIjoiMiExMDAhTURBd01ETXhJWE5sWTNKbGRDOVRSVU5TUlZReE5UWXdNelUwTnpFeE56ZzFNRGc1TVRBaE1EQXdNREk0SVRrNU9Ua3RNVEl0TXpGVU1qTTZOVGs2TlRrdU9UazVPVGs1T1ZvaCIsIlRhcmdldExvY2F0aW9uIjowfQ"}, [ 'Cache-Control',
  'no-cache',
  'Pragma',
  'no-cache',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'Server',
  'Microsoft-IIS/10.0',
  'x-ms-keyvault-region',
  'westus',
  'x-ms-request-id',
  '30de4eaa-36ff-440e-9488-07951d2d8040',
  'x-ms-keyvault-service-version',
  '1.1.0.866',
  'x-ms-keyvault-network-info',
  'addr=108.226.109.105;act_addr_fam=InterNetwork;',
  'X-AspNet-Version',
  '4.0.30319',
  'X-Powered-By',
  'ASP.NET',
  'Strict-Transport-Security',
  'max-age=31536000;includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'Date',
  'Tue, 18 Jun 2019 04:28:17 GMT',
  'Connection',
  'close',
  'Content-Length',
  '2850' ]);


nock('https://login.microsoftonline.com:443', {"encodedQueryParams":true})
  .post('/azure_tenant_id/oauth2/v2.0/token', "response_type=token&grant_type=client_credentials&client_id=azure_client_id&client_secret=azure_client_secret&scope=https%3A%2F%2Fvault.azure.net%2F.default")
  .reply(200, {"token_type":"Bearer","expires_in":3600,"ext_expires_in":3600,"access_token":"access_token"}, [ 'Cache-Control',
  'no-cache, no-store',
  'Pragma',
  'no-cache',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'x-ms-request-id',
  '0dc4dccc-3d28-41ab-bcbd-21043daa1300',
  'P3P',
  'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'Set-Cookie',
  'fpc=AlxoK2YysldNhaO7C2o1m_0_aSJHBgAAAPVemtQOAAAA; expires=Thu, 18-Jul-2019 04:28:23 GMT; path=/; secure; HttpOnly',
  'Set-Cookie',
  'x-ms-gateway-slice=prod; path=/; secure; HttpOnly',
  'Set-Cookie',
  'stsservicecookie=ests; path=/; secure; HttpOnly',
  'Date',
  'Tue, 18 Jun 2019 04:28:22 GMT',
  'Connection',
  'close',
  'Content-Length',
  '1231' ]);


nock('https://keyvault_name.vault.azure.net:443', {"encodedQueryParams":true})
  .get('/secrets')
  .query(true)
  .reply(200, {"value":[{"id":"https://keyvault_name.vault.azure.net/secrets/secret156035471178508910","attributes":{"enabled":false,"exp":32503680000,"created":1560354717,"updated":1560354723,"recoveryLevel":"Recoverable+Purgeable"}},{"id":"https://keyvault_name.vault.azure.net/secrets/secret156035472322108987","attributes":{"enabled":true,"created":1560354728,"updated":1560354728,"recoveryLevel":"Recoverable+Purgeable"}},{"id":"https://keyvault_name.vault.azure.net/secrets/secret156035473421700992","attributes":{"enabled":false,"created":1560354739,"updated":1560354739,"recoveryLevel":"Recoverable+Purgeable"}},{"id":"https://keyvault_name.vault.azure.net/secrets/secret156035474537300332","attributes":{"enabled":true,"created":1560354751,"updated":1560354751,"recoveryLevel":"Recoverable+Purgeable"}},{"id":"https://keyvault_name.vault.azure.net/secrets/secret156035492380902463","attributes":{"enabled":true,"created":1560354940,"updated":1560354940,"recoveryLevel":"Recoverable+Purgeable"}},{"id":"https://keyvault_name.vault.azure.net/secrets/secret156036566801100575","attributes":{"enabled":true,"created":1560365673,"updated":1560365673,"recoveryLevel":"Recoverable+Purgeable"}},{"id":"https://keyvault_name.vault.azure.net/secrets/secret156036567378506379","attributes":{"enabled":true,"exp":32503680000,"created":1560365679,"updated":1560365679,"recoveryLevel":"Recoverable+Purgeable"}},{"id":"https://keyvault_name.vault.azure.net/secrets/secret156036568492401952","attributes":{"enabled":true,"exp":32503680000,"created":1560365690,"updated":1560365695,"recoveryLevel":"Recoverable+Purgeable"}},{"id":"https://keyvault_name.vault.azure.net/secrets/secret156036570169100621","attributes":{"enabled":false,"exp":32503680000,"created":1560365707,"updated":1560365713,"recoveryLevel":"Recoverable+Purgeable"}},{"id":"https://keyvault_name.vault.azure.net/secrets/secret156036571333008936","attributes":{"enabled":true,"created":1560365718,"updated":1560365718,"recoveryLevel":"Recoverable+Purgeable"}},{"id":"https://keyvault_name.vault.azure.net/secrets/secret156036572454709051","attributes":{"enabled":false,"created":1560365729,"updated":1560365729,"recoveryLevel":"Recoverable+Purgeable"}},{"id":"https://keyvault_name.vault.azure.net/secrets/secret156036573548102072","attributes":{"enabled":true,"created":1560365740,"updated":1560365740,"recoveryLevel":"Recoverable+Purgeable"}},{"id":"https://keyvault_name.vault.azure.net/secrets/secret156036585124607918","attributes":{"enabled":true,"created":1560365867,"updated":1560365867,"recoveryLevel":"Recoverable+Purgeable"}},{"id":"https://keyvault_name.vault.azure.net/secrets/secret156036590080809323","attributes":{"enabled":true,"created":1560365906,"updated":1560365906,"recoveryLevel":"Recoverable+Purgeable"}},{"id":"https://keyvault_name.vault.azure.net/secrets/secret156036596439108652","attributes":{"enabled":true,"created":1560365969,"updated":1560365969,"recoveryLevel":"Recoverable+Purgeable"}},{"id":"https://keyvault_name.vault.azure.net/secrets/secret156036624468808284","attributes":{"enabled":true,"created":1560366250,"updated":1560366250,"recoveryLevel":"Recoverable+Purgeable"}},{"id":"https://keyvault_name.vault.azure.net/secrets/secret156036625043103243","attributes":{"enabled":true,"exp":32503680000,"created":1560366256,"updated":1560366256,"recoveryLevel":"Recoverable+Purgeable"}},{"id":"https://keyvault_name.vault.azure.net/secrets/secret156036626200104356","attributes":{"enabled":true,"exp":32503680000,"created":1560366267,"updated":1560366272,"recoveryLevel":"Recoverable+Purgeable"}}],"nextLink":"https://keyvault_name.vault.azure.net:443/secrets?api-version=7.0&$skiptoken=eyJOZXh0TWFya2VyIjoiMiExMDAhTURBd01ETXhJWE5sWTNKbGRDOVRSVU5TUlZReE5UWXdNelkyTWpjNE5EZ3lNREkyTXpRaE1EQXdNREk0SVRrNU9Ua3RNVEl0TXpGVU1qTTZOVGs2TlRrdU9UazVPVGs1T1ZvaCIsIlRhcmdldExvY2F0aW9uIjowfQ"}, [ 'Cache-Control',
  'no-cache',
  'Pragma',
  'no-cache',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'Server',
  'Microsoft-IIS/10.0',
  'x-ms-keyvault-region',
  'westus',
  'x-ms-request-id',
  'be04dfc5-8606-43a7-bd43-d86f038cd058',
  'x-ms-keyvault-service-version',
  '1.1.0.866',
  'x-ms-keyvault-network-info',
  'addr=108.226.109.105;act_addr_fam=InterNetwork;',
  'X-AspNet-Version',
  '4.0.30319',
  'X-Powered-By',
  'ASP.NET',
  'Strict-Transport-Security',
  'max-age=31536000;includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'Date',
  'Tue, 18 Jun 2019 04:28:28 GMT',
  'Connection',
  'close',
  'Content-Length',
  '3822' ]);


nock('https://login.microsoftonline.com:443', {"encodedQueryParams":true})
  .post('/azure_tenant_id/oauth2/v2.0/token', "response_type=token&grant_type=client_credentials&client_id=azure_client_id&client_secret=azure_client_secret&scope=https%3A%2F%2Fvault.azure.net%2F.default")
  .reply(200, {"token_type":"Bearer","expires_in":3600,"ext_expires_in":3600,"access_token":"access_token"}, [ 'Cache-Control',
  'no-cache, no-store',
  'Pragma',
  'no-cache',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'x-ms-request-id',
  '499bfe8f-fdc2-41fb-bb55-1d8d89781500',
  'P3P',
  'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'Set-Cookie',
  'fpc=AlxoK2YysldNhaO7C2o1m_0_aSJHBwAAAPVemtQOAAAA; expires=Thu, 18-Jul-2019 04:28:34 GMT; path=/; secure; HttpOnly',
  'Set-Cookie',
  'x-ms-gateway-slice=prod; path=/; secure; HttpOnly',
  'Set-Cookie',
  'stsservicecookie=ests; path=/; secure; HttpOnly',
  'Date',
  'Tue, 18 Jun 2019 04:28:34 GMT',
  'Connection',
  'close',
  'Content-Length',
  '1231' ]);


nock('https://keyvault_name.vault.azure.net:443', {"encodedQueryParams":true})
  .get('/secrets')
  .query(true)
  .reply(200, {"value":[{"id":"https://keyvault_name.vault.azure.net/secrets/secret156036627848202634","attributes":{"enabled":false,"exp":32503680000,"created":1560366283,"updated":1560366289,"recoveryLevel":"Recoverable+Purgeable"}},{"id":"https://keyvault_name.vault.azure.net/secrets/secret156036628972007025","attributes":{"enabled":true,"created":1560366295,"updated":1560366295,"recoveryLevel":"Recoverable+Purgeable"}},{"id":"https://keyvault_name.vault.azure.net/secrets/secret156036630071100034","attributes":{"enabled":false,"created":1560366306,"updated":1560366306,"recoveryLevel":"Recoverable+Purgeable"}},{"id":"https://keyvault_name.vault.azure.net/secrets/secret156036631177303153","attributes":{"enabled":true,"created":1560366317,"updated":1560366317,"recoveryLevel":"Recoverable+Purgeable"}},{"id":"https://keyvault_name.vault.azure.net/secrets/secret156036651431706935","attributes":{"enabled":true,"created":1560366530,"updated":1560366530,"recoveryLevel":"Recoverable+Purgeable"}},{"id":"https://keyvault_name.vault.azure.net/secrets/secret156036656390609451","attributes":{"enabled":true,"created":1560366569,"updated":1560366569,"recoveryLevel":"Recoverable+Purgeable"}},{"id":"https://keyvault_name.vault.azure.net/secrets/secret156036662789900557","attributes":{"enabled":true,"created":1560366633,"updated":1560366633,"recoveryLevel":"Recoverable+Purgeable"}},{"id":"https://keyvault_name.vault.azure.net/secrets/secret156036776000805385","attributes":{"enabled":true,"created":1560367765,"updated":1560367765,"recoveryLevel":"Recoverable+Purgeable"}},{"id":"https://keyvault_name.vault.azure.net/secrets/secrets156035131601606330","attributes":{"enabled":true,"created":1560351327,"updated":1560351327,"recoveryLevel":"Recoverable+Purgeable"}},{"id":"https://keyvault_name.vault.azure.net/secrets/secrets156035483280103968","attributes":{"enabled":true,"created":1560354843,"updated":1560354843,"recoveryLevel":"Recoverable+Purgeable"}},{"id":"https://keyvault_name.vault.azure.net/secrets/secrets156035483280107298","attributes":{"enabled":true,"created":1560354838,"updated":1560354838,"recoveryLevel":"Recoverable+Purgeable"}},{"id":"https://keyvault_name.vault.azure.net/secrets/secrets156036581736106694","attributes":{"enabled":true,"created":1560365822,"updated":1560365822,"recoveryLevel":"Recoverable+Purgeable"}}],"nextLink":"https://keyvault_name.vault.azure.net:443/secrets?api-version=7.0&$skiptoken=eyJOZXh0TWFya2VyIjoiMiExMDQhTURBd01ETXlJWE5sWTNKbGRDOVRSVU5TUlZSVE1UVTJNRE0yTlRneE56TTJNVEE0TnpVeklUQXdNREF5T0NFNU9UazVMVEV5TFRNeFZESXpPalU1T2pVNUxqazVPVGs1T1RsYUlRLS0iLCJUYXJnZXRMb2NhdGlvbiI6MH0"}, [ 'Cache-Control',
  'no-cache',
  'Pragma',
  'no-cache',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'Server',
  'Microsoft-IIS/10.0',
  'x-ms-keyvault-region',
  'westus',
  'x-ms-request-id',
  '833f68f0-8184-4b84-8f2f-28ccceb37108',
  'x-ms-keyvault-service-version',
  '1.1.0.866',
  'x-ms-keyvault-network-info',
  'addr=108.226.109.105;act_addr_fam=InterNetwork;',
  'X-AspNet-Version',
  '4.0.30319',
  'X-Powered-By',
  'ASP.NET',
  'Strict-Transport-Security',
  'max-age=31536000;includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'Date',
  'Tue, 18 Jun 2019 04:28:40 GMT',
  'Connection',
  'close',
  'Content-Length',
  '2599' ]);


nock('https://login.microsoftonline.com:443', {"encodedQueryParams":true})
  .post('/azure_tenant_id/oauth2/v2.0/token', "response_type=token&grant_type=client_credentials&client_id=azure_client_id&client_secret=azure_client_secret&scope=https%3A%2F%2Fvault.azure.net%2F.default")
  .reply(200, {"token_type":"Bearer","expires_in":3600,"ext_expires_in":3600,"access_token":"access_token"}, [ 'Cache-Control',
  'no-cache, no-store',
  'Pragma',
  'no-cache',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'x-ms-request-id',
  '363f88b6-32d2-4a64-98dc-e7f27aaf1300',
  'P3P',
  'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'Set-Cookie',
  'fpc=AlxoK2YysldNhaO7C2o1m_0_aSJHCAAAAPVemtQOAAAA; expires=Thu, 18-Jul-2019 04:28:48 GMT; path=/; secure; HttpOnly',
  'Set-Cookie',
  'x-ms-gateway-slice=prod; path=/; secure; HttpOnly',
  'Set-Cookie',
  'stsservicecookie=ests; path=/; secure; HttpOnly',
  'Date',
  'Tue, 18 Jun 2019 04:28:48 GMT',
  'Connection',
  'close',
  'Content-Length',
  '1231' ]);


nock('https://keyvault_name.vault.azure.net:443', {"encodedQueryParams":true})
  .get('/secrets')
  .query(true)
  .reply(200, {"value":[{"id":"https://keyvault_name.vault.azure.net/secrets/secrets156036581736108753","attributes":{"enabled":true,"created":1560365828,"updated":1560365828,"recoveryLevel":"Recoverable+Purgeable"}},{"id":"https://keyvault_name.vault.azure.net/secrets/secrets156036639908703029","attributes":{"enabled":true,"created":1560366404,"updated":1560366404,"recoveryLevel":"Recoverable+Purgeable"}},{"id":"https://keyvault_name.vault.azure.net/secrets/secrets156036639908709648","attributes":{"enabled":true,"created":1560366410,"updated":1560366410,"recoveryLevel":"Recoverable+Purgeable"}}],"nextLink":null}, [ 'Cache-Control',
  'no-cache',
  'Pragma',
  'no-cache',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'Server',
  'Microsoft-IIS/10.0',
  'x-ms-keyvault-region',
  'westus',
  'x-ms-request-id',
  '9738b981-be1e-42c4-8fca-71dc8f33c76d',
  'x-ms-keyvault-service-version',
  '1.1.0.866',
  'x-ms-keyvault-network-info',
  'addr=108.226.109.105;act_addr_fam=InterNetwork;',
  'X-AspNet-Version',
  '4.0.30319',
  'X-Powered-By',
  'ASP.NET',
  'Strict-Transport-Security',
  'max-age=31536000;includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'Date',
  'Tue, 18 Jun 2019 04:28:54 GMT',
  'Connection',
  'close',
  'Content-Length',
  '600' ]);


nock('https://login.microsoftonline.com:443', {"encodedQueryParams":true})
  .post('/azure_tenant_id/oauth2/v2.0/token', "response_type=token&grant_type=client_credentials&client_id=azure_client_id&client_secret=azure_client_secret&scope=https%3A%2F%2Fvault.azure.net%2F.default")
  .reply(200, {"token_type":"Bearer","expires_in":3600,"ext_expires_in":3600,"access_token":"access_token"}, [ 'Cache-Control',
  'no-cache, no-store',
  'Pragma',
  'no-cache',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'x-ms-request-id',
  'b6c9e16e-69a3-48cc-8891-ce32411a6f00',
  'P3P',
  'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'Set-Cookie',
  'fpc=AlxoK2YysldNhaO7C2o1m_0_aSJHCQAAAPVemtQOAAAA; expires=Thu, 18-Jul-2019 04:29:02 GMT; path=/; secure; HttpOnly',
  'Set-Cookie',
  'x-ms-gateway-slice=prod; path=/; secure; HttpOnly',
  'Set-Cookie',
  'stsservicecookie=ests; path=/; secure; HttpOnly',
  'Date',
  'Tue, 18 Jun 2019 04:29:02 GMT',
  'Connection',
  'close',
  'Content-Length',
  '1231' ]);


nock('https://keyvault_name.vault.azure.net:443', {"encodedQueryParams":true})
  .delete('/secrets/listSecretName0')
  .query(true)
  .reply(200, {"recoveryId":"https://keyvault_name.vault.azure.net/deletedsecrets/listSecretName0","deletedDate":1560832149,"scheduledPurgeDate":1568608149,"id":"https://keyvault_name.vault.azure.net/secrets/listSecretName0/5ae025ba6318462f95c3af19bd38f244","attributes":{"enabled":true,"created":1560832054,"updated":1560832054,"recoveryLevel":"Recoverable+Purgeable"}}, [ 'Cache-Control',
  'no-cache',
  'Pragma',
  'no-cache',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'Server',
  'Microsoft-IIS/10.0',
  'x-ms-keyvault-region',
  'westus',
  'x-ms-request-id',
  'e31035d6-7b14-4cd3-a59c-1c83bcc3150f',
  'x-ms-keyvault-service-version',
  '1.1.0.866',
  'x-ms-keyvault-network-info',
  'addr=108.226.109.105;act_addr_fam=InterNetwork;',
  'X-AspNet-Version',
  '4.0.30319',
  'X-Powered-By',
  'ASP.NET',
  'Strict-Transport-Security',
  'max-age=31536000;includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'Date',
  'Tue, 18 Jun 2019 04:29:09 GMT',
  'Connection',
  'close',
  'Content-Length',
  '352' ]);


nock('https://login.microsoftonline.com:443', {"encodedQueryParams":true})
  .post('/azure_tenant_id/oauth2/v2.0/token', "response_type=token&grant_type=client_credentials&client_id=azure_client_id&client_secret=azure_client_secret&scope=https%3A%2F%2Fvault.azure.net%2F.default")
  .reply(200, {"token_type":"Bearer","expires_in":3600,"ext_expires_in":3600,"access_token":"access_token"}, [ 'Cache-Control',
  'no-cache, no-store',
  'Pragma',
  'no-cache',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'x-ms-request-id',
  '6ad32dc9-6c5f-4e92-a751-95640dfa1100',
  'P3P',
  'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'Set-Cookie',
  'fpc=AlxoK2YysldNhaO7C2o1m_0_aSJHCgAAAPVemtQOAAAA; expires=Thu, 18-Jul-2019 04:29:34 GMT; path=/; secure; HttpOnly',
  'Set-Cookie',
  'x-ms-gateway-slice=prod; path=/; secure; HttpOnly',
  'Set-Cookie',
  'stsservicecookie=ests; path=/; secure; HttpOnly',
  'Date',
  'Tue, 18 Jun 2019 04:29:33 GMT',
  'Connection',
  'close',
  'Content-Length',
  '1231' ]);


nock('https://keyvault_name.vault.azure.net:443', {"encodedQueryParams":true})
  .delete('/deletedsecrets/listSecretName0')
  .query(true)
  .reply(204, "", [ 'Cache-Control',
  'no-cache',
  'Pragma',
  'no-cache',
  'Expires',
  '-1',
  'Server',
  'Microsoft-IIS/10.0',
  'x-ms-keyvault-region',
  'westus',
  'x-ms-request-id',
  '9ab24d0e-e7a0-4505-a33b-cf9ff1f9bea8',
  'x-ms-keyvault-service-version',
  '1.1.0.866',
  'x-ms-keyvault-network-info',
  'addr=108.226.109.105;act_addr_fam=InterNetwork;',
  'X-AspNet-Version',
  '4.0.30319',
  'X-Powered-By',
  'ASP.NET',
  'Strict-Transport-Security',
  'max-age=31536000;includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'Date',
  'Tue, 18 Jun 2019 04:29:41 GMT',
  'Connection',
  'close' ]);


nock('https://login.microsoftonline.com:443', {"encodedQueryParams":true})
  .post('/azure_tenant_id/oauth2/v2.0/token', "response_type=token&grant_type=client_credentials&client_id=azure_client_id&client_secret=azure_client_secret&scope=https%3A%2F%2Fvault.azure.net%2F.default")
  .reply(200, {"token_type":"Bearer","expires_in":3600,"ext_expires_in":3600,"access_token":"access_token"}, [ 'Cache-Control',
  'no-cache, no-store',
  'Pragma',
  'no-cache',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'x-ms-request-id',
  'd1a67293-af06-4850-8c37-6c62d1621400',
  'P3P',
  'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'Set-Cookie',
  'fpc=AlxoK2YysldNhaO7C2o1m_0_aSJHCwAAAPVemtQOAAAA; expires=Thu, 18-Jul-2019 04:29:48 GMT; path=/; secure; HttpOnly',
  'Set-Cookie',
  'x-ms-gateway-slice=prod; path=/; secure; HttpOnly',
  'Set-Cookie',
  'stsservicecookie=ests; path=/; secure; HttpOnly',
  'Date',
  'Tue, 18 Jun 2019 04:29:47 GMT',
  'Connection',
  'close',
  'Content-Length',
  '1231' ]);


nock('https://keyvault_name.vault.azure.net:443', {"encodedQueryParams":true})
  .delete('/secrets/listSecretName1')
  .query(true)
  .reply(200, {"recoveryId":"https://keyvault_name.vault.azure.net/deletedsecrets/listSecretName1","deletedDate":1560832195,"scheduledPurgeDate":1568608195,"id":"https://keyvault_name.vault.azure.net/secrets/listSecretName1/88c4a61b79404aa6811e564665ae9303","attributes":{"enabled":true,"created":1560832069,"updated":1560832069,"recoveryLevel":"Recoverable+Purgeable"}}, [ 'Cache-Control',
  'no-cache',
  'Pragma',
  'no-cache',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'Server',
  'Microsoft-IIS/10.0',
  'x-ms-keyvault-region',
  'westus',
  'x-ms-request-id',
  '8a2eee17-d1d1-4e39-92b7-0da86979ca9a',
  'x-ms-keyvault-service-version',
  '1.1.0.866',
  'x-ms-keyvault-network-info',
  'addr=108.226.109.105;act_addr_fam=InterNetwork;',
  'X-AspNet-Version',
  '4.0.30319',
  'X-Powered-By',
  'ASP.NET',
  'Strict-Transport-Security',
  'max-age=31536000;includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'Date',
  'Tue, 18 Jun 2019 04:29:54 GMT',
  'Connection',
  'close',
  'Content-Length',
  '352' ]);


nock('https://login.microsoftonline.com:443', {"encodedQueryParams":true})
  .post('/azure_tenant_id/oauth2/v2.0/token', "response_type=token&grant_type=client_credentials&client_id=azure_client_id&client_secret=azure_client_secret&scope=https%3A%2F%2Fvault.azure.net%2F.default")
  .reply(200, {"token_type":"Bearer","expires_in":3600,"ext_expires_in":3600,"access_token":"access_token"}, [ 'Cache-Control',
  'no-cache, no-store',
  'Pragma',
  'no-cache',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'x-ms-request-id',
  '4f4348ef-f87b-4960-bfdf-02022b661200',
  'P3P',
  'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'Set-Cookie',
  'fpc=AlxoK2YysldNhaO7C2o1m_0_aSJHDAAAAPVemtQOAAAA; expires=Thu, 18-Jul-2019 04:30:22 GMT; path=/; secure; HttpOnly',
  'Set-Cookie',
  'x-ms-gateway-slice=prod; path=/; secure; HttpOnly',
  'Set-Cookie',
  'stsservicecookie=ests; path=/; secure; HttpOnly',
  'Date',
  'Tue, 18 Jun 2019 04:30:21 GMT',
  'Connection',
  'close',
  'Content-Length',
  '1231' ]);


nock('https://keyvault_name.vault.azure.net:443', {"encodedQueryParams":true})
  .delete('/deletedsecrets/listSecretName1')
  .query(true)
  .reply(204, "", [ 'Cache-Control',
  'no-cache',
  'Pragma',
  'no-cache',
  'Expires',
  '-1',
  'Server',
  'Microsoft-IIS/10.0',
  'x-ms-keyvault-region',
  'westus',
  'x-ms-request-id',
  '9a08f117-c2f5-4ad8-b135-3d24b59ef63a',
  'x-ms-keyvault-service-version',
  '1.1.0.866',
  'x-ms-keyvault-network-info',
  'addr=108.226.109.105;act_addr_fam=InterNetwork;',
  'X-AspNet-Version',
  '4.0.30319',
  'X-Powered-By',
  'ASP.NET',
  'Strict-Transport-Security',
  'max-age=31536000;includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'Date',
  'Tue, 18 Jun 2019 04:30:29 GMT',
  'Connection',
  'close' ]);

