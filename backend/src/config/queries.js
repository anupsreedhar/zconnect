const getByEmployeeId = (req, resp) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getEmployeeById, [id], (error,results) => {
        if(error) throw error;
        resp.status(200).send(results.rows);
        console.log(`Employee with ${id} returned successfully`);
    });
}