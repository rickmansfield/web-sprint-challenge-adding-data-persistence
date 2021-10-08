const db = require('../../data/dbConfig')

async function fetchAllTasks() {
    const rows = await db('tasks as t')
        .join('projects as p', 'p.project_id', 't.project_id')
        .select('t.*', 'p.project_name', 'p.project_description')
    return rows.map((item) => {
        return {
            ...item,
            task_completed: item.task_completed ? true : false,
        }
    })
}
module.exports = { fetchAllTasks }