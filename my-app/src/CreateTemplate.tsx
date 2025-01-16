import { View, Text } from 'react-native';
import React, { useState } from 'react';
import axios from 'axios';

const CreateTemplate: React.FC = () => {
    const [name, setName] = useState('');
    const [desc, setDesc] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:8085/create-template',{
                templateName: name,
                templateDesc: desc,
                email: email
            });

            console.log(response.data);

        } catch (err: any) {
            console.error(err.response?.data || 'Template details not able to be submitted.');
        }
    };
    return (
       <div>
        <h1>Create Template</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor='name'>Template Name: </label>
            <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <label htmlFor='desc'>Template Desc: </label>
            <input
                id="desc"
                type="text"
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                required
            />
            <label htmlFor='name'>Email: </label>
            <input
                id="email"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />

            <button type="submit">Submit</button>
        </form>
       </div> 
    );
};

export default CreateTemplate;