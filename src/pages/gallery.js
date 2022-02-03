import React from 'react'
import Layout from "../components/layout";
import {graphql} from "gatsby";
import Card from "../components/card";
import {galleryStyle} from '../styles/gallery.module.css';

export default function Gallery({data}) {
    return (
        <Layout pageTitle="Monster Gallery">
            <div className={galleryStyle}>
                {data && data.allAirtable.nodes.map((node,id) =>{
                    return (
                            <Card monster={node.data} key={id}></Card>
                    )
                })}
            </div>
        </Layout>
    )
}

export const query = graphql`
    query MonsterGallery {
      allAirtable {
        nodes {
          data {
            Creator
            Image
            Monster
            Skill
            slug
          }
        }
      }
    }
`

