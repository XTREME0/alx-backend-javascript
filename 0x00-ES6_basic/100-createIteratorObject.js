export default function createIteratorObject(report) {
    let r = [];
    for (const vl of Object.values(report.allEmployees)) {
	    r = [...r, ...vl];}
    return r;
}
