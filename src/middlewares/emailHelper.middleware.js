//nodemailer
import nodemailer from 'nodemailer'

const emailHelper = async (email, fullName, phone, request) => {
    //Trasnporter
    const transporter = nodemailer.createTransport({
        service : 'gmail',
        auth : {
            user: 'palmar.ivan0205@gmail.com',
            pass : 'ewoi bjaf susy nzxi'
        }
    })
    
    let emailStructure = `Nombre Completo: ${fullName}\nNumero de Celular: ${phone}\n\nSolicitud: \n\n${request}`

    //Set up emailOptions
    let mailOptions = {
        from : email,
        to : 'palmar.ivan0205@gmail.com',
        subject : 'Asistencia Tecnica',
        text : emailStructure
    }

    //send the email
    try{
        const info = await transporter.sendMail(mailOptions)
        console.log('Email sent ' + info.response)
        return info
    }catch(err){
        console.log('Couldn"t send the email')
        throw err;
    }
}

export default emailHelper