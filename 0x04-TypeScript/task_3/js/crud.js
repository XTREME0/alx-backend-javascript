export function insertRecord(record) {
  console.log('Insert record', record);
  return Math.floor(Math.random() * Math.floor(1000));
}

export function removeRecord(recordId) {
  console.log('Remove record id', recordId);
  return;
}

export function updateRecord(recordId, record) {
  console.log(`Update record ${recordId}`, record);
  return recordId;
}
