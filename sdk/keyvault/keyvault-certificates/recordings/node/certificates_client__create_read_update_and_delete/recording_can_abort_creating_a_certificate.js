let nock = require('nock');

module.exports.testInfo = {"uniqueName":{},"newDate":{}}

nock('https://keyvault_name.vault.azure.net:443', {"encodedQueryParams":true})
  .post('/certificates/recoverCertificateName-canabortcreatingacertificate-/create')
  .query(true)
  .reply(401, {"error":{"code":"Unauthorized","message":"Request is missing a Bearer or PoP token."}}, [
  'Cache-Control',
  'no-cache',
  'Pragma',
  'no-cache',
  'Content-Length',
  '87',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'Server',
  'Microsoft-IIS/10.0',
  'WWW-Authenticate',
  'Bearer authorization="https://login.windows.net/azure_tenant_id", resource="https://vault.azure.net"',
  'x-ms-keyvault-region',
  'westus',
  'x-ms-request-id',
  '090645c0-aeaa-46b8-b899-a90fb5f27188',
  'x-ms-keyvault-service-version',
  '1.1.0.882',
  'x-ms-keyvault-network-info',
  'addr=13.66.157.165;act_addr_fam=InterNetwork;',
  'X-AspNet-Version',
  '4.0.30319',
  'X-Powered-By',
  'ASP.NET',
  'Strict-Transport-Security',
  'max-age=31536000;includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'Date',
  'Mon, 18 Nov 2019 21:44:11 GMT'
]);

nock('https://login.microsoftonline.com:443', {"encodedQueryParams":true})
  .post('/azure_tenant_id/oauth2/v2.0/token', "response_type=token&grant_type=client_credentials&client_id=azure_client_id&client_secret=azure_client_secret&scope=https%3A%2F%2Fvault.azure.net%2F.default")
  .reply(200, {"token_type":"Bearer","expires_in":3600,"ext_expires_in":3600,"access_token":"access_token"}, [
  'Cache-Control',
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
  'fd7a9d8f-3512-4afc-a338-62911fcb0000',
  'x-ms-ests-server',
  '2.1.9707.10 - WUS ProdSlices',
  'P3P',
  'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'Set-Cookie',
  'fpc=Av9UDKk_9QpGqomntVVzswM_aSJHAQAAAKsHZdUOAAAA; expires=Wed, 18-Dec-2019 21:44:12 GMT; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'x-ms-gateway-slice=estsfd; path=/; SameSite=None; secure; HttpOnly',
  'Set-Cookie',
  'stsservicecookie=estsfd; path=/; SameSite=None; secure; HttpOnly',
  'Date',
  'Mon, 18 Nov 2019 21:44:11 GMT',
  'Content-Length',
  '1231'
]);

nock('https://keyvault_name.vault.azure.net:443', {"encodedQueryParams":true})
  .post('/certificates/recoverCertificateName-canabortcreatingacertificate-/create', {"policy":{"key_props":{},"secret_props":{},"x509_props":{"subject":"cn=MyCert","sans":{}},"issuer":{"name":"Self"},"attributes":{}},"attributes":{}})
  .query(true)
  .reply(202, {"id":"https://keyvault_name.vault.azure.net/certificates/recoverCertificateName-canabortcreatingacertificate-/pending","issuer":{"name":"Self"},"csr":"MIICoTCCAYkCAQAwETEPMA0GA1UEAxMGTXlDZXJ0MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA5ArpLL3z/m/zJbbS11XV01Zxe/AJ9R73qr2uOe/ZgJ4F1CnKsORIw/maj8cffUlDHwPm50SlPIQQxz9YWcY+b4rpqV9ql1tSVxSsl9e8nWSp62yyt+DBMh7Zkz5HxbY3iUWpRkLu869arH/MAqeUxg64Wy70xTRqXK6lk8VhpqaUCOiWdD8ZER/rVaep2TC2b/dH4WPRTcA5pAl/F5MO9QxcXqoedXU8aiOgCdrRFvSyR0Aa4aBmTTdwtxgu936BGRaTtkbN7/ojPcOJMZUBYyQmHtE+xw0cA0fkqIsVuVCGH64Xrxihy1zWmDu5A8LlFWQvJj/IjZY6QuQkC+iyDwIDAQABoEswSQYJKoZIhvcNAQkOMTwwOjAOBgNVHQ8BAf8EBAMCBaAwHQYDVR0lBBYwFAYIKwYBBQUHAwEGCCsGAQUFBwMCMAkGA1UdEwQCMAAwDQYJKoZIhvcNAQELBQADggEBAK01igz0BHUKff0oQQYB6PuPGbIWpr/46w1jtQiw6bXwaK2sfDyYs/s6w7cKZHoU0/zwPAOeA6F4ydM+wHwmnsGv68KfEuYUBotAExhuwEKcTdoxW0dUQcenc6nRT5jQzW+N+cHD0yXOxB7cWOi+8rDL57HwYVjlRmPJhGRyXBKLvZ5pLXvE5eE4u0OS4FcfcpYIqlkS7TSM9e5ynANY6V7WFXbaTDKwZPqGc3zlBaB8ZZZTypf/hxYvc1HOLJn2fltO/tFoiUuGB7Ntwifsavdt5DRLFJLIcBV7+uVJ0MyMHNurkAGAtGMyMvaqi3vKtNh0x86j1Fk4BjajgT3MQSg=","cancellation_requested":false,"status":"inProgress","status_details":"Pending certificate created. Certificate request is in progress. This may take some time based on the issuer provider. Please check again later.","request_id":"0c3d5a74352b4b92a7a58d4da533938b"}, [
  'Cache-Control',
  'no-cache',
  'Pragma',
  'no-cache',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'Location',
  'https://keyvault_name.vault.azure.net/certificates/recoverCertificateName-canabortcreatingacertificate-/pending?api-version=7.0&request_id=0c3d5a74352b4b92a7a58d4da533938b',
  'Retry-After',
  '10',
  'Server',
  'Microsoft-IIS/10.0',
  'x-ms-keyvault-region',
  'westus',
  'x-ms-request-id',
  '0daef091-108f-4af8-a9b4-644fc2b09a31',
  'x-ms-keyvault-service-version',
  '1.1.0.882',
  'x-ms-keyvault-network-info',
  'addr=13.66.157.165;act_addr_fam=InterNetwork;',
  'X-AspNet-Version',
  '4.0.30319',
  'X-Powered-By',
  'ASP.NET',
  'Strict-Transport-Security',
  'max-age=31536000;includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'Date',
  'Mon, 18 Nov 2019 21:44:12 GMT',
  'Content-Length',
  '1338'
]);

nock('https://keyvault_name.vault.azure.net:443', {"encodedQueryParams":true})
  .get('/certificates/recoverCertificateName-canabortcreatingacertificate-/pending')
  .query(true)
  .reply(401, {"error":{"code":"Unauthorized","message":"Request is missing a Bearer or PoP token."}}, [
  'Cache-Control',
  'no-cache',
  'Pragma',
  'no-cache',
  'Content-Length',
  '87',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'Server',
  'Microsoft-IIS/10.0',
  'WWW-Authenticate',
  'Bearer authorization="https://login.windows.net/azure_tenant_id", resource="https://vault.azure.net"',
  'x-ms-keyvault-region',
  'westus',
  'x-ms-request-id',
  '3183a002-dc32-41a7-91c9-556de1674302',
  'x-ms-keyvault-service-version',
  '1.1.0.882',
  'x-ms-keyvault-network-info',
  'addr=13.66.157.165;act_addr_fam=InterNetwork;',
  'X-AspNet-Version',
  '4.0.30319',
  'X-Powered-By',
  'ASP.NET',
  'Strict-Transport-Security',
  'max-age=31536000;includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'Date',
  'Mon, 18 Nov 2019 21:44:12 GMT'
]);

nock('https://login.microsoftonline.com:443', {"encodedQueryParams":true})
  .post('/azure_tenant_id/oauth2/v2.0/token', "response_type=token&grant_type=client_credentials&client_id=azure_client_id&client_secret=azure_client_secret&scope=https%3A%2F%2Fvault.azure.net%2F.default")
  .reply(200, {"token_type":"Bearer","expires_in":3600,"ext_expires_in":3600,"access_token":"access_token"}, [
  'Cache-Control',
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
  '6520bada-f693-42b8-81dc-f26d983e7a00',
  'x-ms-ests-server',
  '2.1.9677.8 - EUS ProdSlices',
  'P3P',
  'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'Set-Cookie',
  'fpc=Av9UDKk_9QpGqomntVVzswM_aSJHAgAAAKsHZdUOAAAA; expires=Wed, 18-Dec-2019 21:44:13 GMT; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'x-ms-gateway-slice=estsfd; path=/; SameSite=None; secure; HttpOnly',
  'Set-Cookie',
  'stsservicecookie=estsfd; path=/; SameSite=None; secure; HttpOnly',
  'Date',
  'Mon, 18 Nov 2019 21:44:12 GMT',
  'Content-Length',
  '1231'
]);

nock('https://keyvault_name.vault.azure.net:443', {"encodedQueryParams":true})
  .get('/certificates/recoverCertificateName-canabortcreatingacertificate-/pending')
  .query(true)
  .reply(200, {"id":"https://keyvault_name.vault.azure.net/certificates/recoverCertificateName-canabortcreatingacertificate-/pending","issuer":{"name":"Self"},"csr":"MIICoTCCAYkCAQAwETEPMA0GA1UEAxMGTXlDZXJ0MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA5ArpLL3z/m/zJbbS11XV01Zxe/AJ9R73qr2uOe/ZgJ4F1CnKsORIw/maj8cffUlDHwPm50SlPIQQxz9YWcY+b4rpqV9ql1tSVxSsl9e8nWSp62yyt+DBMh7Zkz5HxbY3iUWpRkLu869arH/MAqeUxg64Wy70xTRqXK6lk8VhpqaUCOiWdD8ZER/rVaep2TC2b/dH4WPRTcA5pAl/F5MO9QxcXqoedXU8aiOgCdrRFvSyR0Aa4aBmTTdwtxgu936BGRaTtkbN7/ojPcOJMZUBYyQmHtE+xw0cA0fkqIsVuVCGH64Xrxihy1zWmDu5A8LlFWQvJj/IjZY6QuQkC+iyDwIDAQABoEswSQYJKoZIhvcNAQkOMTwwOjAOBgNVHQ8BAf8EBAMCBaAwHQYDVR0lBBYwFAYIKwYBBQUHAwEGCCsGAQUFBwMCMAkGA1UdEwQCMAAwDQYJKoZIhvcNAQELBQADggEBAK01igz0BHUKff0oQQYB6PuPGbIWpr/46w1jtQiw6bXwaK2sfDyYs/s6w7cKZHoU0/zwPAOeA6F4ydM+wHwmnsGv68KfEuYUBotAExhuwEKcTdoxW0dUQcenc6nRT5jQzW+N+cHD0yXOxB7cWOi+8rDL57HwYVjlRmPJhGRyXBKLvZ5pLXvE5eE4u0OS4FcfcpYIqlkS7TSM9e5ynANY6V7WFXbaTDKwZPqGc3zlBaB8ZZZTypf/hxYvc1HOLJn2fltO/tFoiUuGB7Ntwifsavdt5DRLFJLIcBV7+uVJ0MyMHNurkAGAtGMyMvaqi3vKtNh0x86j1Fk4BjajgT3MQSg=","cancellation_requested":false,"status":"inProgress","status_details":"Pending certificate created. Certificate request is in progress. This may take some time based on the issuer provider. Please check again later.","request_id":"0c3d5a74352b4b92a7a58d4da533938b"}, [
  'Cache-Control',
  'no-cache',
  'Pragma',
  'no-cache',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'Retry-After',
  '10',
  'Server',
  'Microsoft-IIS/10.0',
  'x-ms-keyvault-region',
  'westus',
  'x-ms-request-id',
  '41428d99-ec99-46b1-879e-e5805a723785',
  'x-ms-keyvault-service-version',
  '1.1.0.882',
  'x-ms-keyvault-network-info',
  'addr=13.66.157.165;act_addr_fam=InterNetwork;',
  'X-AspNet-Version',
  '4.0.30319',
  'X-Powered-By',
  'ASP.NET',
  'Strict-Transport-Security',
  'max-age=31536000;includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'Date',
  'Mon, 18 Nov 2019 21:44:13 GMT',
  'Content-Length',
  '1338'
]);
