import { loremIpsum } from 'lorem-ipsum';

export default function About() {
  return (
    <>
      <h1> About! </h1>
      <h2>Lorem Ipsum</h2>
      <p>{loremIpsum({ count: 3, units: 'paragraphs' })}</p>
    </>
  )
}