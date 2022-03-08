import nodemailer from 'nodemailer';
import { Request, Response } from 'express';
import SignUp from '../models/signUp';

const hostname = process.env.APPSETTING_STMP_HOST;
const username = process.env.APPSETTING_SMTP_USER;
const pswd = process.env.APPSETTING_SMTP_PASS;
const emailPort = Number(process.env.APPSETTING_SMTP_PORT) | 587;

const emailMessage =
`
<!doctype html>
<html lang="en">

<head>
    <!-- Required meta tags -->
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet"
        integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap" rel="stylesheet">
    <title>You registered for HackAUBG 4.0</title>
    <style>

    </style>

</head>

<body style="margin-top: 15px;">
    <div class="container" style="max-height: 72px; height: 72px; background: linear-gradient(90deg, rgba(0,87,146,1) 0%, rgba(0,187,240,1) 100%); -webkit-border-top-left-radius: 72px;
    -moz-border-radius-bottomleft: 90px;
    border-top-left-radius: 72px;
    max-width: 700px;">
        <p> &nbsp </p>
    </div>

    <div class="container"
        style="max-width: 700px;  background-color: #fcfcff; padding-left: 30px; padding-right: 90px;">
        <br /><br />
        <h4><b> You registered for HackAUBG 4.0! <br /></b></h4>
        <br />
		Before the hackathon starts, there are a few important things:
		<br />
		<br />
		To make sure that you are always well informed and get all the updates around the event on time, join the <b> Official HackAUBG 4.0 Facebook Group:
                                                <a href="https://www.facebook.com/groups/377774040439928/">
                                                   https://www.facebook.com/groups/HackAUBG4.0-communication
                                                 </a></b>.

		All virtual meetings, instructions, and information updates will be posted in it by a member of The Hub AUBG – the organization behind the hackathon.

		<br />
		<br />

		Each team that takes part in HackAUBG 4.0 will have assigned a <b>facilitator</b> from The Hub. This will be the person to answer all your questions and help you out whenever you need assistance.
			We'll send you a follow-up email in the next 48 hours to introduce you to your facilitator! This will be the person who will help you in finding more teammates for the hackathon.

		<br />

		<br />
		We can't wait to meet you!


		<br />
        <br />
        <b>- The Hub AUBG</b>
        <br />
		<br />
		<a href="https://www.facebook.com/TheHubAUBG/" target="_blank" title="TheHubAUBG"><img src="https://icon-library.net//images/faceboo-icon/faceboo-icon-23.jpg" width="42px" /></a>
		<a href="https://www.instagram.com/thehubaubg/" target="_blank" title="TheHubAUBG"><img src="https://icon-library.net//images/instagram-icon-download-free/instagram-icon-download-free-5.jpg" width="31px" /></a>
		<a href="https://www.linkedin.com/company/the-hub-aubg" target="_blank" title="TheHubAUBG" style="padding-left:8px;"><img src="https://icon-library.net//images/linkin-icon/linkin-icon-15.jpg" width="28px"/></a>
		<a href="https://www.youtube.com/channel/UChdtBZBvaK9XZurP3GjPDug" target="_blank" title="TheHubAUBG" style="padding-left:8px;"> <img src="https://icon-library.net//images/youtube-download-icon/youtube-download-icon-19.jpg" width="30px" /></a>

		<br />
		<br />
    </div>

	<div class="container" style="max-width: 700px; background-color: #fcfcff; padding-right:0; margin-top: -100px; z-index: -1;">
        <img src="https://i.ibb.co/5Mw9Dzr/Robot.png" width="250"
                height="auto" alt="TheHubAUBG"
                style="display:block; border: none; max-width:230px; margin: 0 auto; margin-bottom: 0; margin-right:0;" />
    </div>

    <div class="container" style="max-height: 72px; height: 72px; background: linear-gradient(90deg, rgba(0,87,146,1) 0%, rgba(0,187,240,1) 100%); -webkit-border-bottom-right-radius: 72px;
    -moz-border-radius-bottomleft: 90px;
    border-bottom-right-radius: 72px;
    max-width: 700px;">
        <h5 class="text-center" style="vertical-align: middle;
    line-height: 72px; color: white; ">Learn &nbsp•&nbsp Innovate &nbsp•&nbsp Inspire</h5>
    </div>
    </div>
    <div class="container" style="margin-top: 15px; margin-bottom: 15px; max-width: 700px; font-size: 12px;
					line-height: 15px;
					text-align: center;
					color: black;
                    max-width: 820px">
        <div class="text-center">Hub International ©, <br />2022</div>
    </div>

    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
        integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
        crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
        integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
        crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
        integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
        crossorigin="anonymous"></script>
</body>
</html>
`;

async function sendEmail(emailTo: string, subject: string, htmlMessage: string) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: hostname,
    port: emailPort,
    secure: true,
    requireTLS: true,
    auth: {
      user: username,
      pass: pswd
    },
    logger: true
  });

  await transporter.sendMail({
    from: username,
    to: [emailTo, 'thehubaubg@gmail.com'],
    subject: subject,
    text: '',
    html: htmlMessage,
  }).then((msg) => console.log(msg)).catch(err => console.log(err));

}

export const createSignUp = async (req: Request, res: Response) => {
  res.header('Access-Control-Allow-Origin', '*');
  const signUpData = req.body;

  const s = new SignUp(signUpData);
  await s
    .validate() // run validate
    .then(async () => {
      // if reached here, then validation was fine, attempt to save
      SignUp.findOne({ email: signUpData.email }).exec((err, su) => {
        // callback
        // check if findOne failed
        if (err) return res.status(500).json({ message: err });
        // check if a signup was found
        if (su) return res.status(409).json({ message: 'This email already exists' });

        s.save((err) => {
          // callback in case save fails, in which case log and return 500
          if (err) return res.status(500).json({ message: err });
        });

        sendEmail(signUpData.email, 'Registration for HackAUBG 4.0', emailMessage);

        return res.status(201).json({
          // if reached here, then save was fine, return 201 CREATED
          signup: s
        });
      });
    })
    .catch((err) => {
      // catch the failed validate, which is a 400 Bad request
      console.log(err);

      return res.status(400).json({
        message: err
      });
    });
};
