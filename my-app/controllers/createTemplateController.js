const db = require('../config/db');

const createTemplate = async (req, res) => {
    console.log("Request body: ", req.body);

    const { templateName, templateDesc, email } = req.body;

    if ( !templateDesc || !templateName || !email ) return res.status(400).json({'message' : 'All fields are to be filled!'}); 

    try {
        const [rows] = await db.execute('SELECT * FROM templates WHERE name = ?', [templateName]);
        if (rows.length > 0) return res.state(409).json({'message' : 'Template name already exists! Choose a different one.'}); // conflict

        const result = await db.execute('INSERT INTO templates (template_title, template_desc, email_id) VALUES (?, ?, ?)', [templateName, templateDesc, email]);
        const templateTable = await db.execute('CREATE TABLE ? (Name varchar(255), Description varchar(255), subjCode char(1), startDate datetime, endDate datetime, Colour int, DayOrder int)', [templateName]);
        console.log("Template created."); // success message printed on console

        res.status(201).json({'success' : `Template ${templateName} successfully created!`}); // 201 OK status code
    } catch (error) {
        console.error(error);
        res.status(500).json({'message' : error.message});
    }
}

module.exports = {
    createTemplate
}