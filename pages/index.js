import Head from "next/head";
import { MongoClient } from "mongodb";
import MeetupList from "../components/meetups/MeetupList";
import { Fragment } from "react";
import MeetupDetails from "./[meetupId]";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A first Meetup ",
    image:
      "https://www.planetware.com/wpimages/2020/07/new-york-best-cities-new-york-city.jpg",
    address: "Some address 5, 12345 Some City",
    description: "THis is a first meetup",
  },
  {
    id: "m2",
    title: "A second Meetup ",
    image:
      "https://www.planetware.com/wpimages/2020/07/new-york-best-cities-new-york-city.jpg",
    address: "Some address 10, 12345 Some City",
    description: "THis is a second meetup",
  },
  {
    id: "m3",
    title: "A third Meetup ",
    image:
      "https://www.planetware.com/wpimages/2020/07/new-york-best-cities-new-york-city.jpg",
    address: "Some address 15, 12345 Some City",
    description: "THis is a third meetup",
  },
  {
    id: "m4",
    title: "A forth Meetup ",
    image:
      "https://www.planetware.com/wpimages/2020/07/new-york-best-cities-new-york-city.jpg",
    address: "Some address 20, 12345 Some City",
    description: "THis is a forth meetup",
  },
];

function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>React Meetups</title>
        <meta
          name="description"
          content="Briwser a huge list of highly active React meetups!"
        />
      </Head>
      <MeetupList meetups={props.meetups} />;
    </Fragment>
  );
}

// export async function getServerSideProps(context) {
//   // all code here will run on server, never on client
//   const req = context.req;
//   const rep = context.rep;
//   // fetch data from API
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   }; // no need to revalidate because this function works for every incoming request
// }

export async function getStaticProps() {
  // fetch data from an API
  const client = await MongoClient.connect(
    "mongodb+srv://asdf:Qweasd12@cluster0.po9tl.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  const meetups = await meetupsCollection.find().toArray(); // get an array of documents
  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })), // they would be prepared then set for HomePage(props)
    },
    revalidate: 60, // every 60 seconds
  };
}
export default HomePage;
