import React, { useState } from 'react';
import axios from '../../interceptors/axios';
import { RiSendPlane2Fill } from "react-icons/ri";
import Spinner from '../../components/Spinner';
import { useForm } from "react-hook-form";
import ReactMarkdown from 'react-markdown';
import ChatBot from '../../assets/chat-bot.png';

const QuestionsSupport = () => {
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm();


  const onSubmit = (data, e) => {
    e.preventDefault();

    const question = data.question
    console.log(question)

    setLoading(true)

    axios.post('http://localhost:8000/api/ask/', { "question": question })
      .then(res => {
        console.log(res.data);
        setAnswer(res.data.answer)
        setLoading(false)

      })
      .catch(err => {
        console.error(err);
        setLoading(false)
        setAnswer(err)
      });


  };

  return (
    <div className='container px-5 py-6 mx-auto overflow-hidden'>
      <div className='bg-white rounded-lg flex h-screen justify-center py-10'>
        <div className='w-full mx-10'>
          <h1>Ask me anything</h1>
          <p className='mb-4 text-xs text-gray-500'>Powered by Openai GPT-3.5</p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='flex'>
              <input className='form-control mr-2' type="text" placeholder='Enter question here' {...register("question", { required: "Please enter a question" })} />
              {loading ? <Spinner /> : <button className='bg-primary-800 p-2 m-2 rounded-full' type='submit'><RiSendPlane2Fill className='text-white' /></button>
              }
            </div>
          </form>
          <br />

          {answer && <div className='bg-gray-100 h-full border border-gray-100 rounded-xl px-10 py-10'>
            <div className='flex items-center mb-4'>
              <img src={ChatBot} alt='Chatbot icon' className='w-8 h-8 mr-2' />
              <span className='font-bold text-lg text-primary-800'>Answer:</span>
            </div>
            <div className='bg-white shadow-lg p-8 rounded-lg'>
              <ReactMarkdown className='text-start'>{answer}</ReactMarkdown>
            </div>
          </div>}
        </div>
      </div>
    </div>

  );
}

export default QuestionsSupport