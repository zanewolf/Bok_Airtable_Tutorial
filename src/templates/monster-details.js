import React from "react"
import Layout from "../components/layout"
import {graphql} from "gatsby";

export default function MonsterDetails ({data}){

    return (
        <Layout>
            <div >
                <h2>{data.airtable.data.Monster}</h2>
                <h3>Created by {data.airtable.data.Creator}</h3>
                <img src={data.airtable.data.Image} alt={data.airtable.data.Monster}/>

            </div>
        </Layout>
    )
}

export const query = graphql`
  query MonsterDetails($slug: String) {
      airtable(data: {slug: {eq: $slug}}) {
          data {
            Creator
            Image
            Monster
            Skill
          }
      }
   }

`