import React from 'react';
import { render,screen, fireEvent } from "@testing-library/react";
import ContactForm from './ContactForm'
import { act } from 'react-dom/test-utils';


test("submit form", ()=>{
      render(<ContactForm />
        )
    const firstNameInput = screen.getByLabelText(/first name*/i)
     const lastNameInput = screen.getByLabelText(/last name*/i)
     const emailInput = screen.getByLabelText(/email*/i)
     const messageInput = screen.getByLabelText(/message/i)
  
     act( () => {     
         fireEvent.change(firstNameInput,{
        target:{name: "firstName", value:"wei"}
        })
    })

    act(()=>{  fireEvent.change(lastNameInput,{
        target:{name: "lastName", value:"peluso"}
    })
    })
   
     act(()=>{
        fireEvent.change(emailInput,{
            target:{name: "email", value:"weipeluso@gmail.com"}
        })
     })

   act(()=>{
    fireEvent.change(messageInput,{
        target:{name: "message", value:"I am wei peluso"}
    })
   })


    // console.log(firstNameInput.value)
    // console.log(lastNameInput.value)
    // console.log(emailInput.value)
    // console.log(messageInput.value)

    const submitButton=screen.getByText(/submit/i)
    act(()=>{
        fireEvent.click(submitButton)
    })
  

     screen.findByText(/wei/i)
     screen.findByText(/peluso/i)
     screen.findByText(/weipeluso@gmail.com/i)
     screen.findByText(/i am wei peluso/i)

    
})
