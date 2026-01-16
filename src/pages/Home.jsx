import { loremIpsum } from 'lorem-ipsum';

export default function Home() {
  return (
    <>
      <h1> Home! </h1>
      <h2>Lorem Ipsum</h2>
      <p>{loremIpsum({ count: 3, units: 'paragraphs' })}</p>
    </>
  )
}