/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type LLM = LLM1;
export type RequiresApiKey = string;
export type RequiresUniqueId = boolean;
export type RequiresWriteLog = boolean;
export type SystemMessage = string;

export interface LLM1 {
  requires_api_key?: RequiresApiKey;
  requires_unique_id?: RequiresUniqueId;
  requires_write_log?: RequiresWriteLog;
  system_message?: SystemMessage;
  [k: string]: unknown;
}
