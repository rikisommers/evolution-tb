import React, { useState } from "react";
import { useRouter } from "next/router";
import Layout from "../components/layout";
import { getHome } from "../lib/api";
import PostBody from "../components/post/post-body";
import PostModal from "../components/post/post-modal";
import PageHeader from "../components/page-header";
import PageContact from "../components/page-contact";
export default function Index({ home }) {
  const router = useRouter();
  const lastUpdatedDate = home?.sys?.updatedAt || "N/A";
  const clipPathInitial = `inset(1.0rem 1.0rem 6.0rem round 0.5rem)`;
  const clipPathAnimate = `inset( 1.5rem round 1rem )`;
  const clipPathExit = `inset( 1.5rem 1.5rem 90vh 1.5rem round 1rem )`;

  const [isModalOpen, setIsModalOpen] = useState(false);
  
  console.log(home)

  const toggleModal = (slug) => {
    setIsModalOpen(!isModalOpen);
  };


  return (
    <Layout>
            
      <PostModal
        isOpen={isModalOpen}
        onClose={toggleModal}
      >
       <h1>Modal</h1>
      </PostModal>

      <PageHeader
                title={home.title}
                subtitle={home.intro}
                content={home.bio}
                img={home.image}

     />
      <PostBody content={home.csblocksCollection} />


     <PageContact
                      title={home.title}
                      subtitle={home.intro}
                      content={home.contact}
     />
    </Layout>
  );
}

export async function getStaticProps({ preview = false }) {
  const home = (await getHome(preview)) ?? [];
  return {
    props: {
      home,
    },
  };
}
