<?php
// This file was auto-generated from sdk-root/src/data/sts/2011-06-15/api-2.json
return [ 'version' => '2.0', 'metadata' => [ 'apiVersion' => '2011-06-15', 'endpointPrefix' => 'sts', 'globalEndpoint' => 'sts.amazonaws.com', 'protocol' => 'query', 'serviceAbbreviation' => 'AWS STS', 'serviceFullName' => 'AWS Security Token Service', 'serviceId' => 'STS', 'signatureVersion' => 'v4', 'uid' => 'sts-2011-06-15', 'xmlNamespace' => 'https://sts.amazonaws.com/doc/2011-06-15/', ], 'operations' => [ 'AssumeRole' => [ 'name' => 'AssumeRole', 'http' => [ 'method' => 'POST', 'requestUri' => '/', ], 'input' => [ 'shape' => 'AssumeRoleRequest', ], 'output' => [ 'shape' => 'AssumeRoleResponse', 'resultWrapper' => 'AssumeRoleResult', ], 'errors' => [ [ 'shape' => 'MalformedPolicyDocumentException', ], [ 'shape' => 'PackedPolicyTooLargeException', ], [ 'shape' => 'RegionDisabledException', ], [ 'shape' => 'ExpiredTokenException', ], ], ], 'AssumeRoleWithSAML' => [ 'name' => 'AssumeRoleWithSAML', 'http' => [ 'method' => 'POST', 'requestUri' => '/', ], 'input' => [ 'shape' => 'AssumeRoleWithSAMLRequest', ], 'output' => [ 'shape' => 'AssumeRoleWithSAMLResponse', 'resultWrapper' => 'AssumeRoleWithSAMLResult', ], 'errors' => [ [ 'shape' => 'MalformedPolicyDocumentException', ], [ 'shape' => 'PackedPolicyTooLargeException', ], [ 'shape' => 'IDPRejectedClaimException', ], [ 'shape' => 'InvalidIdentityTokenException', ], [ 'shape' => 'ExpiredTokenException', ], [ 'shape' => 'RegionDisabledException', ], ], ], 'AssumeRoleWithWebIdentity' => [ 'name' => 'AssumeRoleWithWebIdentity', 'http' => [ 'method' => 'POST', 'requestUri' => '/', ], 'input' => [ 'shape' => 'AssumeRoleWithWebIdentityRequest', ], 'output' => [ 'shape' => 'AssumeRoleWithWebIdentityResponse', 'resultWrapper' => 'AssumeRoleWithWebIdentityResult', ], 'errors' => [ [ 'shape' => 'MalformedPolicyDocumentException', ], [ 'shape' => 'PackedPolicyTooLargeException', ], [ 'shape' => 'IDPRejectedClaimException', ], [ 'shape' => 'IDPCommunicationErrorException', ], [ 'shape' => 'InvalidIdentityTokenException', ], [ 'shape' => 'ExpiredTokenException', ], [ 'shape' => 'RegionDisabledException', ], ], ], 'DecodeAuthorizationMessage' => [ 'name' => 'DecodeAuthorizationMessage', 'http' => [ 'method' => 'POST', 'requestUri' => '/', ], 'input' => [ 'shape' => 'DecodeAuthorizationMessageRequest', ], 'output' => [ 'shape' => 'DecodeAuthorizationMessageResponse', 'resultWrapper' => 'DecodeAuthorizationMessageResult', ], 'errors' => [ [ 'shape' => 'InvalidAuthorizationMessageException', ], ], ], 'GetAccessKeyInfo' => [ 'name' => 'GetAccessKeyInfo', 'http' => [ 'method' => 'POST', 'requestUri' => '/', ], 'input' => [ 'shape' => 'GetAccessKeyInfoRequest', ], 'output' => [ 'shape' => 'GetAccessKeyInfoResponse', 'resultWrapper' => 'GetAccessKeyInfoResult', ], ], 'GetCallerIdentity' => [ 'name' => 'GetCallerIdentity', 'http' => [ 'method' => 'POST', 'requestUri' => '/', ], 'input' => [ 'shape' => 'GetCallerIdentityRequest', ], 'output' => [ 'shape' => 'GetCallerIdentityResponse', 'resultWrapper' => 'GetCallerIdentityResult', ], ], 'GetFederationToken' => [ 'name' => 'GetFederationToken', 'http' => [ 'method' => 'POST', 'requestUri' => '/', ], 'input' => [ 'shape' => 'GetFederationTokenRequest', ], 'output' => [ 'shape' => 'GetFederationTokenResponse', 'resultWrapper' => 'GetFederationTokenResult', ], 'errors' => [ [ 'shape' => 'MalformedPolicyDocumentException', ], [ 'shape' => 'PackedPolicyTooLargeException', ], [ 'shape' => 'RegionDisabledException', ], ], ], 'GetSessionToken' => [ 'name' => 'GetSessionToken', 'http' => [ 'method' => 'POST', 'requestUri' => '/', ], 'input' => [ 'shape' => 'GetSessionTokenRequest', ], 'output' => [ 'shape' => 'GetSessionTokenResponse', 'resultWrapper' => 'GetSessionTokenResult', ], 'errors' => [ [ 'shape' => 'RegionDisabledException', ], ], ], ], 'shapes' => [ 'AssumeRoleRequest' => [ 'type' => 'structure', 'required' => [ 'RoleArn', 'RoleSessionName', ], 'members' => [ 'RoleArn' => [ 'shape' => 'arnType', ], 'RoleSessionName' => [ 'shape' => 'roleSessionNameType', ], 'PolicyArns' => [ 'shape' => 'policyDescriptorListType', ], 'Policy' => [ 'shape' => 'unrestrictedSessionPolicyDocumentType', ], 'DurationSeconds' => [ 'shape' => 'roleDurationSecondsType', ], 'Tags' => [ 'shape' => 'tagListType', ], 'TransitiveTagKeys' => [ 'shape' => 'tagKeyListType', ], 'ExternalId' => [ 'shape' => 'externalIdType', ], 'SerialNumber' => [ 'shape' => 'serialNumberType', ], 'TokenCode' => [ 'shape' => 'tokenCodeType', ], 'SourceIdentity' => [ 'shape' => 'sourceIdentityType', ], 'ProvidedContexts' => [ 'shape' => 'ProvidedContextsListType', ], ], ], 'AssumeRoleResponse' => [ 'type' => 'structure', 'members' => [ 'Credentials' => [ 'shape' => 'Credentials', ], 'AssumedRoleUser' => [ 'shape' => 'AssumedRoleUser', ], 'PackedPolicySize' => [ 'shape' => 'nonNegativeIntegerType', ], 'SourceIdentity' => [ 'shape' => 'sourceIdentityType', ], ], ], 'AssumeRoleWithSAMLRequest' => [ 'type' => 'structure', 'required' => [ 'RoleArn', 'PrincipalArn', 'SAMLAssertion', ], 'members' => [ 'RoleArn' => [ 'shape' => 'arnType', ], 'PrincipalArn' => [ 'shape' => 'arnType', ], 'SAMLAssertion' => [ 'shape' => 'SAMLAssertionType', ], 'PolicyArns' => [ 'shape' => 'policyDescriptorListType', ], 'Policy' => [ 'shape' => 'sessionPolicyDocumentType', ], 'DurationSeconds' => [ 'shape' => 'roleDurationSecondsType', ], ], ], 'AssumeRoleWithSAMLResponse' => [ 'type' => 'structure', 'members' => [ 'Credentials' => [ 'shape' => 'Credentials', ], 'AssumedRoleUser' => [ 'shape' => 'AssumedRoleUser', ], 'PackedPolicySize' => [ 'shape' => 'nonNegativeIntegerType', ], 'Subject' => [ 'shape' => 'Subject', ], 'SubjectType' => [ 'shape' => 'SubjectType', ], 'Issuer' => [ 'shape' => 'Issuer', ], 'Audience' => [ 'shape' => 'Audience', ], 'NameQualifier' => [ 'shape' => 'NameQualifier', ], 'SourceIdentity' => [ 'shape' => 'sourceIdentityType', ], ], ], 'AssumeRoleWithWebIdentityRequest' => [ 'type' => 'structure', 'required' => [ 'RoleArn', 'RoleSessionName', 'WebIdentityToken', ], 'members' => [ 'RoleArn' => [ 'shape' => 'arnType', ], 'RoleSessionName' => [ 'shape' => 'roleSessionNameType', ], 'WebIdentityToken' => [ 'shape' => 'clientTokenType', ], 'ProviderId' => [ 'shape' => 'urlType', ], 'PolicyArns' => [ 'shape' => 'policyDescriptorListType', ], 'Policy' => [ 'shape' => 'sessionPolicyDocumentType', ], 'DurationSeconds' => [ 'shape' => 'roleDurationSecondsType', ], ], ], 'AssumeRoleWithWebIdentityResponse' => [ 'type' => 'structure', 'members' => [ 'Credentials' => [ 'shape' => 'Credentials', ], 'SubjectFromWebIdentityToken' => [ 'shape' => 'webIdentitySubjectType', ], 'AssumedRoleUser' => [ 'shape' => 'AssumedRoleUser', ], 'PackedPolicySize' => [ 'shape' => 'nonNegativeIntegerType', ], 'Provider' => [ 'shape' => 'Issuer', ], 'Audience' => [ 'shape' => 'Audience', ], 'SourceIdentity' => [ 'shape' => 'sourceIdentityType', ], ], ], 'AssumedRoleUser' => [ 'type' => 'structure', 'required' => [ 'AssumedRoleId', 'Arn', ], 'members' => [ 'AssumedRoleId' => [ 'shape' => 'assumedRoleIdType', ], 'Arn' => [ 'shape' => 'arnType', ], ], ], 'Audience' => [ 'type' => 'string', ], 'Credentials' => [ 'type' => 'structure', 'required' => [ 'AccessKeyId', 'SecretAccessKey', 'SessionToken', 'Expiration', ], 'members' => [ 'AccessKeyId' => [ 'shape' => 'accessKeyIdType', ], 'SecretAccessKey' => [ 'shape' => 'accessKeySecretType', ], 'SessionToken' => [ 'shape' => 'tokenType', ], 'Expiration' => [ 'shape' => 'dateType', ], ], ], 'DecodeAuthorizationMessageRequest' => [ 'type' => 'structure', 'required' => [ 'EncodedMessage', ], 'members' => [ 'EncodedMessage' => [ 'shape' => 'encodedMessageType', ], ], ], 'DecodeAuthorizationMessageResponse' => [ 'type' => 'structure', 'members' => [ 'DecodedMessage' => [ 'shape' => 'decodedMessageType', ], ], ], 'ExpiredTokenException' => [ 'type' => 'structure', 'members' => [ 'message' => [ 'shape' => 'expiredIdentityTokenMessage', ], ], 'error' => [ 'code' => 'ExpiredTokenException', 'httpStatusCode' => 400, 'senderFault' => true, ], 'exception' => true, ], 'FederatedUser' => [ 'type' => 'structure', 'required' => [ 'FederatedUserId', 'Arn', ], 'members' => [ 'FederatedUserId' => [ 'shape' => 'federatedIdType', ], 'Arn' => [ 'shape' => 'arnType', ], ], ], 'GetAccessKeyInfoRequest' => [ 'type' => 'structure', 'required' => [ 'AccessKeyId', ], 'members' => [ 'AccessKeyId' => [ 'shape' => 'accessKeyIdType', ], ], ], 'GetAccessKeyInfoResponse' => [ 'type' => 'structure', 'members' => [ 'Account' => [ 'shape' => 'accountType', ], ], ], 'GetCallerIdentityRequest' => [ 'type' => 'structure', 'members' => [], ], 'GetCallerIdentityResponse' => [ 'type' => 'structure', 'members' => [ 'UserId' => [ 'shape' => 'userIdType', ], 'Account' => [ 'shape' => 'accountType', ], 'Arn' => [ 'shape' => 'arnType', ], ], ], 'GetFederationTokenRequest' => [ 'type' => 'structure', 'required' => [ 'Name', ], 'members' => [ 'Name' => [ 'shape' => 'userNameType', ], 'Policy' => [ 'shape' => 'sessionPolicyDocumentType', ], 'PolicyArns' => [ 'shape' => 'policyDescriptorListType', ], 'DurationSeconds' => [ 'shape' => 'durationSecondsType', ], 'Tags' => [ 'shape' => 'tagListType', ], ], ], 'GetFederationTokenResponse' => [ 'type' => 'structure', 'members' => [ 'Credentials' => [ 'shape' => 'Credentials', ], 'FederatedUser' => [ 'shape' => 'FederatedUser', ], 'PackedPolicySize' => [ 'shape' => 'nonNegativeIntegerType', ], ], ], 'GetSessionTokenRequest' => [ 'type' => 'structure', 'members' => [ 'DurationSeconds' => [ 'shape' => 'durationSecondsType', ], 'SerialNumber' => [ 'shape' => 'serialNumberType', ], 'TokenCode' => [ 'shape' => 'tokenCodeType', ], ], ], 'GetSessionTokenResponse' => [ 'type' => 'structure', 'members' => [ 'Credentials' => [ 'shape' => 'Credentials', ], ], ], 'IDPCommunicationErrorException' => [ 'type' => 'structure', 'members' => [ 'message' => [ 'shape' => 'idpCommunicationErrorMessage', ], ], 'error' => [ 'code' => 'IDPCommunicationError', 'httpStatusCode' => 400, 'senderFault' => true, ], 'exception' => true, ], 'IDPRejectedClaimException' => [ 'type' => 'structure', 'members' => [ 'message' => [ 'shape' => 'idpRejectedClaimMessage', ], ], 'error' => [ 'code' => 'IDPRejectedClaim', 'httpStatusCode' => 403, 'senderFault' => true, ], 'exception' => true, ], 'InvalidAuthorizationMessageException' => [ 'type' => 'structure', 'members' => [ 'message' => [ 'shape' => 'invalidAuthorizationMessage', ], ], 'error' => [ 'code' => 'InvalidAuthorizationMessageException', 'httpStatusCode' => 400, 'senderFault' => true, ], 'exception' => true, ], 'InvalidIdentityTokenException' => [ 'type' => 'structure', 'members' => [ 'message' => [ 'shape' => 'invalidIdentityTokenMessage', ], ], 'error' => [ 'code' => 'InvalidIdentityToken', 'httpStatusCode' => 400, 'senderFault' => true, ], 'exception' => true, ], 'Issuer' => [ 'type' => 'string', ], 'MalformedPolicyDocumentException' => [ 'type' => 'structure', 'members' => [ 'message' => [ 'shape' => 'malformedPolicyDocumentMessage', ], ], 'error' => [ 'code' => 'MalformedPolicyDocument', 'httpStatusCode' => 400, 'senderFault' => true, ], 'exception' => true, ], 'NameQualifier' => [ 'type' => 'string', ], 'PackedPolicyTooLargeException' => [ 'type' => 'structure', 'members' => [ 'message' => [ 'shape' => 'packedPolicyTooLargeMessage', ], ], 'error' => [ 'code' => 'PackedPolicyTooLarge', 'httpStatusCode' => 400, 'senderFault' => true, ], 'exception' => true, ], 'PolicyDescriptorType' => [ 'type' => 'structure', 'members' => [ 'arn' => [ 'shape' => 'arnType', ], ], ], 'ProvidedContext' => [ 'type' => 'structure', 'members' => [ 'ProviderArn' => [ 'shape' => 'arnType', ], 'ContextAssertion' => [ 'shape' => 'contextAssertionType', ], ], ], 'ProvidedContextsListType' => [ 'type' => 'list', 'member' => [ 'shape' => 'ProvidedContext', ], 'max' => 5, ], 'RegionDisabledException' => [ 'type' => 'structure', 'members' => [ 'message' => [ 'shape' => 'regionDisabledMessage', ], ], 'error' => [ 'code' => 'RegionDisabledException', 'httpStatusCode' => 403, 'senderFault' => true, ], 'exception' => true, ], 'SAMLAssertionType' => [ 'type' => 'string', 'max' => 100000, 'min' => 4, 'sensitive' => true, ], 'Subject' => [ 'type' => 'string', ], 'SubjectType' => [ 'type' => 'string', ], 'Tag' => [ 'type' => 'structure', 'required' => [ 'Key', 'Value', ], 'members' => [ 'Key' => [ 'shape' => 'tagKeyType', ], 'Value' => [ 'shape' => 'tagValueType', ], ], ], 'accessKeyIdType' => [ 'type' => 'string', 'max' => 128, 'min' => 16, 'pattern' => '[\\w]*', ], 'accessKeySecretType' => [ 'type' => 'string', 'sensitive' => true, ], 'accountType' => [ 'type' => 'string', ], 'arnType' => [ 'type' => 'string', 'max' => 2048, 'min' => 20, 'pattern' => '[\\u0009\\u000A\\u000D\\u0020-\\u007E\\u0085\\u00A0-\\uD7FF\\uE000-\\uFFFD\\u10000-\\u10FFFF]+', ], 'assumedRoleIdType' => [ 'type' => 'string', 'max' => 193, 'min' => 2, 'pattern' => '[\\w+=,.@:-]*', ], 'clientTokenType' => [ 'type' => 'string', 'max' => 20000, 'min' => 4, 'sensitive' => true, ], 'contextAssertionType' => [ 'type' => 'string', 'max' => 2048, 'min' => 4, ], 'dateType' => [ 'type' => 'timestamp', ], 'decodedMessageType' => [ 'type' => 'string', ], 'durationSecondsType' => [ 'type' => 'integer', 'max' => 129600, 'min' => 900, ], 'encodedMessageType' => [ 'type' => 'string', 'max' => 10240, 'min' => 1, ], 'expiredIdentityTokenMessage' => [ 'type' => 'string', ], 'externalIdType' => [ 'type' => 'string', 'max' => 1224, 'min' => 2, 'pattern' => '[\\w+=,.@:\\/-]*', ], 'federatedIdType' => [ 'type' => 'string', 'max' => 193, 'min' => 2, 'pattern' => '[\\w+=,.@\\:-]*', ], 'idpCommunicationErrorMessage' => [ 'type' => 'string', ], 'idpRejectedClaimMessage' => [ 'type' => 'string', ], 'invalidAuthorizationMessage' => [ 'type' => 'string', ], 'invalidIdentityTokenMessage' => [ 'type' => 'string', ], 'malformedPolicyDocumentMessage' => [ 'type' => 'string', ], 'nonNegativeIntegerType' => [ 'type' => 'integer', 'min' => 0, ], 'packedPolicyTooLargeMessage' => [ 'type' => 'string', ], 'policyDescriptorListType' => [ 'type' => 'list', 'member' => [ 'shape' => 'PolicyDescriptorType', ], ], 'regionDisabledMessage' => [ 'type' => 'string', ], 'roleDurationSecondsType' => [ 'type' => 'integer', 'max' => 43200, 'min' => 900, ], 'roleSessionNameType' => [ 'type' => 'string', 'max' => 64, 'min' => 2, 'pattern' => '[\\w+=,.@-]*', ], 'serialNumberType' => [ 'type' => 'string', 'max' => 256, 'min' => 9, 'pattern' => '[\\w+=/:,.@-]*', ], 'sessionPolicyDocumentType' => [ 'type' => 'string', 'max' => 2048, 'min' => 1, 'pattern' => '[\\u0009\\u000A\\u000D\\u0020-\\u00FF]+', ], 'sourceIdentityType' => [ 'type' => 'string', 'max' => 64, 'min' => 2, 'pattern' => '[\\w+=,.@-]*', ], 'tagKeyListType' => [ 'type' => 'list', 'member' => [ 'shape' => 'tagKeyType', ], 'max' => 50, ], 'tagKeyType' => [ 'type' => 'string', 'max' => 128, 'min' => 1, 'pattern' => '[\\p{L}\\p{Z}\\p{N}_.:/=+\\-@]+', ], 'tagListType' => [ 'type' => 'list', 'member' => [ 'shape' => 'Tag', ], 'max' => 50, ], 'tagValueType' => [ 'type' => 'string', 'max' => 256, 'min' => 0, 'pattern' => '[\\p{L}\\p{Z}\\p{N}_.:/=+\\-@]*', ], 'tokenCodeType' => [ 'type' => 'string', 'max' => 6, 'min' => 6, 'pattern' => '[\\d]*', ], 'tokenType' => [ 'type' => 'string', ], 'unrestrictedSessionPolicyDocumentType' => [ 'type' => 'string', 'min' => 1, 'pattern' => '[\\u0009\\u000A\\u000D\\u0020-\\u00FF]+', ], 'urlType' => [ 'type' => 'string', 'max' => 2048, 'min' => 4, ], 'userIdType' => [ 'type' => 'string', ], 'userNameType' => [ 'type' => 'string', 'max' => 32, 'min' => 2, 'pattern' => '[\\w+=,.@-]*', ], 'webIdentitySubjectType' => [ 'type' => 'string', 'max' => 255, 'min' => 6, ], ],];
