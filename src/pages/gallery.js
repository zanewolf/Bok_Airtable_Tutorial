import React from 'react'
import Layout from "../components/layout";
import {graphql} from "gatsby";
import Card from "../components/card";
import '../styles/gallery.module.css';


export default function Gallery({data}) {
    return (
        <Layout pageTitle="Monster Gallery">
            <div>
                {data && data.allAirtable.nodes.map((node,id) =>{
                    return (
                        <li className={"card"} key={id}>
                            <Card monster={node.data}></Card>
                        </li>
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

