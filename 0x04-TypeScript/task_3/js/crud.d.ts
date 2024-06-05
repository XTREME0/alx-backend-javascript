import { RecordID, RecordElement } from './interface';

export function insertRecord(record: RecordElement): number;

export function removeRecord(recordId: RecordID): void;

export function updateRecord(recordId: RecordID, record: RecordElement): RecordID;


