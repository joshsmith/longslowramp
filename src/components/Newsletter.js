import React, { useState } from "react"
import addToMailchimp from "gatsby-plugin-mailchimp"
import styled from "styled-components"

import { Section } from "./Basic"

const FlexForm = styled.form`
  display: flex;
`

const EmailInput = styled.input`
  border-radius: 5px;
  flex: 1;
  padding: 0.75em 1em;
`

const JoinButton = styled.button`
  margin-left: 10px;
  padding: 0.75em 1em;
`

const SignupSuccess = styled.p`
  color: #4caf50;
  font-size: 1em;
  font-weight: 700;
  padding: 1em 0;
`

const SignupError = styled.p`
  color: #f44336;
  font-size: 0.8em;

  a {
    font-weight: normal;
  }
`

const Newsletter = () => {
  const [email, setEmail] = useState("")
  const [mailchimpLoading, setMailchimpLoading] = useState(false)
  const [mailchimpSuccess, setMailchimpSuccess] = useState(null)
  const [mailchimpMessage, setMailchimpMessage] = useState(null)

  const handleSubmit = e => {
    e.preventDefault()
    if (!email) return

    setMailchimpLoading(true)
    addToMailchimp(email)
      .then(data => {
        setMailchimpLoading(false)
        const { result, msg } = data
        const success = result === "success"
        setMailchimpSuccess(success)
        if (!success) setMailchimpMessage(msg)
      })
      .catch(() => {
        setMailchimpLoading(false)
        setMailchimpSuccess(false)
        setMailchimpMessage("An unexpected error occurred. Please try again.")
      })
  }

  const handleChange = event => {
    const newEmail = event.target.value
    if (!newEmail) setMailchimpMessage(null)
    setEmail(newEmail)
  }

  return (
    <Section>
      <h3>Newsletter</h3>
      <p>Join friends who are following my climb.</p>
      {mailchimpSuccess ? (
        <SignupSuccess>
          <span role="img" aria-label="yay">
            🎉
          </span>{" "}
          Thanks for joining me! You're good to go.
        </SignupSuccess>
      ) : (
        <FlexForm onSubmit={e => handleSubmit(e)}>
          <EmailInput
            name="email"
            type="email"
            value={email}
            onChange={handleChange}
          />
          <JoinButton>
            {mailchimpLoading ? "Joining..." : "Join now"}
          </JoinButton>
        </FlexForm>
      )}
      {!mailchimpSuccess && mailchimpMessage && (
        <SignupError dangerouslySetInnerHTML={{ __html: mailchimpMessage }} />
      )}
    </Section>
  )
}

export default Newsletter
