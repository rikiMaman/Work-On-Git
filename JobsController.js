let jobs = [
    { id: 1, name: "Full Stach Software" },
    { id: 2, name: "Embedded" },
    { id: 3, name: "Junior" },
    { id: 4, name: ".NET DEveloper" }


]
let counts = 5
const JobController = {
    getAll: (req, res) => {
        const { name } = req.query
        // const filter= jobs.filter(x=>  !name || x.name.indexOf(name)==0)
        res.send(jobs)
    },
    add: (req, res) => {
        const { name } = req.body
        console.log(name)
        const newJob = { id: count++, name: name };
        jobs.push(newJob)
        res.send(newJob)
    },

    update: (req, res) => {
        const { id } = req.params
        const { name } = req.body
        const job = jobs.find(x => x.id == id)
        job.name = name
        res.send(job)

    },
    delete: (req, res) => {
        const { id } = req.params
        jobs = jobs.filter(x => x.id != id)
        res.send('Job deleted succesfully')

    }

}
export default JobController