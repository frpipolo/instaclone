const mongoose = require("mongoose");
const {ApolloServer} = require ("apollo-server");
const {ApolloServerPluginLandingPageGraphQLPlayground} = require ("apollo-server-core");
const typeDefs = require("./gql/schema");
const resolvers = require("./gql/resolver");
require("dotenv").config({path: ".env"});

(err, _)=>{
	if(err){
		console.log('Error de conexion' + err);
	}else{
		console.log("Conexion Correcta");
		server();
	}
});

function server(){
	const serverApollo = new ApolloServer({
		typeDefs,
		resolvers,
		csrfPrevention: true,
		plugins: [
		//Disable landing page and put Playground
    ApolloServerPluginLandingPageGraphQLPlayground(),
  	],	
	});

	serverApollo.listen().then(({url})=>{
		console.log(`Servidor listo en ${url}`);
		console.log("Servidor On");
	})

}

