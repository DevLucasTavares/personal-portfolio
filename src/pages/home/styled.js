import styled from "styled-components";

export const HomePageContainer = styled.div`
  min-height: 88vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f4f4f4;
`

export const ResumeContainer = styled.div`
width: 60vw;
display: flex;
flex-direction: column;
background-color: white;
border-radius: 10px;
padding: 10px;
margin: 20px;
margin-top: 40px;
gap: 10px;
text-align: center;

@media (min-width: 1024px) {
  width: 40vw
}
`

export const ProjectContainer = styled.div`
width: 60vw;
display: flex;
flex-direction: column;
background-color: white;
border-radius: 10px;
padding: 10px 10px 30px 10px;
margin: 20px;
gap: 10px;
text-align: center;

@media (min-width: 1024px) {
  width: 40vw
}
`

export const ProjectChamber = styled.div`
// width: 10vw;
display: flex;
flex-direction: column;
background-color: lightgray;
border-radius: 10px;
padding-bottom: 10px;
margin: 5px;

p {
  margin-left: 5px;
  margin-right: 5px;
}
`

export const FormContainer = styled.div`
  width: 60vw;
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 10px;
  padding: 10px;
  margin: 20px;

  input, textarea {
    margin-bottom: 10px;
  }

  @media (min-width: 1024px) {
    width: 40vw
  }
`
