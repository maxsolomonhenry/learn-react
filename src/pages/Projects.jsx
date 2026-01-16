import { loremIpsum } from 'lorem-ipsum';

export default function Projects() {
  return (
    <>
      <h1> Projects! </h1>
      <h2>Lorem Ipsum</h2>
      <p>{loremIpsum({ count: 3, units: 'paragraphs' })}</p>
    </>
  )
}