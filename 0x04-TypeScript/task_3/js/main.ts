import { RecordID, RecordElement } from './interface';
import * as DataOperations from './crud';

const record: RecordElement = {
  givenName: 'Guillaume',
  familyName: 'Salva',
};

const newRecordID: RecordID = DataOperations.insertRecord(record);
const modifiedRecord: RecordElement = { ...record, age: 23 };

DataOperations.updateRecord(newRecordID, modifiedRecord);

DataOperations.removeRecord(newRecordID);
