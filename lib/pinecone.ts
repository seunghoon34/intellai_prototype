import {Pinecone} from "@pinecone-database/pinecone"

const apiKey = process.env.PINCONE_API_KEY ;

if(!apiKey){
    throw Error("pinecone api key is not set")
}

const pinecone = new Pinecone({
    environment: "gcp-starter",
    apiKey,
})

export const notesIndex = pinecone.Index("intellai-test");