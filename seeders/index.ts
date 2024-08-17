import { modelsConn } from "..";
import { seedInvestments } from "./factories/investment.seeder";

(async () => { 
    // connect to database
    await modelsConn.connect();
    
    // seed data
    await seedInvestments(50);
}) ()