import { faker } from "@faker-js/faker";
import supertest from "supertest";
import app from "../src/app";
import prisma from "../src/config/database";
import { registerBodyFactory, registerFactory } from "./factories/registerFactory";
import { deleteAllData, disconnectPrisma } from "./factories/scenarioFactory";
import { specieBodyFactory, specieFactory } from "./factories/specieFactory";
import { tokenFactory } from "./factories/tokenFactory";
import { superUserFactory, userBodyFactory, userFactory } from "./factories/userFactory";

beforeEach(async () => {
  await deleteAllData();
});

const server = supertest(app);

describe("User tests", () => {
  it("Test POST /signup with valid user", async () => {
    const user = userBodyFactory();

    const result = await server.post("/signup").send({ ...user, confirmPassword: user.password });

    const confirmCreation = await prisma.users.findUnique({ 
      where: { email: user.email } 
    });

    expect(result.status).toBe(201);
    expect(confirmCreation).not.toBeNull();
  });

  it("Test POST /signup with invalid user", async () => {
    const user = userBodyFactory();

    await userFactory(user);

    const result = await server.post("/signup").send({ ...user, confirmPassword: user.password });

    expect(result.status).toBe(409);
  });

  it("Test POST /signin with valid user", async () => {
    const user = userBodyFactory();

    await userFactory(user);

    const result = await server.post("/signin").send({ email: user.email, password: user.password });

    const { token } = result.body;

    expect(token).not.toBeFalsy();
  });

  it("Test POST /signin with invalid user", async () => {
    const user = userBodyFactory();

    const result = await server.post("/signin").send({ email: user.email, password: user.password });

    const { token } = result.body;

    expect(token).toBeFalsy();
  });
});

describe("Specie tests", () => {
  it("Test POST /specie", async () => {
    const userInitial = userBodyFactory();
    const user = await superUserFactory(userInitial);
    const token = await tokenFactory({ id: user.id, name: user.name, superuser: user.superuser });
    const specie = specieBodyFactory();

    const result = await server.post("/specie").set("Authorization", `Bearer ${token}`).send(specie);

    const confirmCreation = await prisma.species.findUnique({
      where: { cientificName: specie.cientificName }
    });

    expect(result.status).toBe(201);
    expect(confirmCreation).not.toBeNull();
  });

  it("Test GET /specie/:specieId", async () => {
    const specie = await specieFactory();

    const result = await server.get(`/specie/${specie.id}`);

    expect(result.body.cientificName).toEqual(specie.cientificName);
  });

  it("Test GET /species", async () => {
    await specieFactory();
    await specieFactory();
    const specie = await specieFactory();

    const result = await server.get("/species");

    expect(result.body).toBeInstanceOf(Array);
    expect(result.body.length).toEqual(3);
  });

  it("Test PUT /specie/:specieId", async () => {
    const userInitial = userBodyFactory();
    const user = await superUserFactory(userInitial);
    const token = await tokenFactory({ id: user.id, name: user.name, superuser: user.superuser });

    const specie = await specieFactory();

    const updateSpecie = specieBodyFactory();

    await server.put(`/specie/${specie.id}`).set("Authorization", `Bearer ${token}`).send(updateSpecie);
  
    const updatedSpecie = await prisma.species.findUnique({
      where: { id: specie.id }
    });

    expect(updatedSpecie.cientificName).not.toEqual(specie.cientificName);
  });

  it("Test DELETE /specie/:specieId", async () => {
    const userInitial = userBodyFactory();
    const user = await superUserFactory(userInitial);
    const token = await tokenFactory({ id: user.id, name: user.name, superuser: user.superuser });

    const specie = await specieFactory();

    await server.delete(`/specie/${specie.id}`).set("Authorization", `Bearer ${token}`);

    const deletedSpecie = await prisma.species.findUnique({
      where: { id: specie.id }
    });

    expect(deletedSpecie).toBeFalsy();
  });
});

describe("Register tests", () => {
   it("Test POST /register", async () => {
    const userInitial = userBodyFactory();
    const user = await userFactory(userInitial);
    const token = await tokenFactory({ id: user.id, name: user.name, superuser: user.superuser });
    const specie = await specieFactory();
    const register = await registerBodyFactory(specie.id)

    const result = await server.post("/register").set("Authorization", `Bearer ${token}`).send(register);

    const confirmCreation = await prisma.registers.findMany({
      where: {title: register.title}
    })

    expect(result.status).toBe(201);
    expect(confirmCreation).not.toBeNull();
    expect(confirmCreation.length).toEqual(1);
   });

   it("Test GET /myregisters/:userId", async () => {
    const userInitial = userBodyFactory();
    const user = await userFactory(userInitial);
    const specie = await specieFactory();
    
    await registerFactory(user.id, specie.id);
    await registerFactory(user.id, specie.id);
    await registerFactory(user.id, specie.id);

    const result = await server.get(`/myregisters/${user.id}`);

    expect(result.body).toBeInstanceOf(Array);
    expect(result.body.length).toEqual(3);
   });

   it("Test GET /registers/:specieId", async () => {
    const userInitial = userBodyFactory();
    const user = await userFactory(userInitial);
    const specie = await specieFactory();
    
    await registerFactory(user.id, specie.id);
    await registerFactory(user.id, specie.id);
    await registerFactory(user.id, specie.id);

    const result = await server.get(`/registers/${specie.id}`);

    expect(result.body).toBeInstanceOf(Array);
    expect(result.body.length).toEqual(3);
   });

   it("Test GET /register/:registerId", async () => {
    const userInitial = userBodyFactory();
    const user = await userFactory(userInitial);
    const specie = await specieFactory();
    
    const register = await registerFactory(user.id, specie.id);

    const result = await server.get(`/register/${register.id}`);

    expect(result.body).not.toBeNull();
    expect(result.body.title).toEqual(register.title);
   });

   it("Test PUT /register/:registerId", async () => {
    const userInitial = userBodyFactory();
    const user = await userFactory(userInitial);
    const token = await tokenFactory({ id: user.id, name: user.name, superuser: user.superuser });
    const firstSpecie = await specieFactory();

    const register = await registerFactory(user.id, firstSpecie.id);

    const secondSpecie = await specieFactory();

    const updateRegister = await registerBodyFactory(secondSpecie.id);

    await server.put(`/register/${register.id}`).set("Authorization", `Bearer ${token}`).send(updateRegister);
  
    const updatedRegister = await prisma.registers.findUnique({
      where: { id: register.id }
    });

    expect(updatedRegister.specieId).not.toEqual(register.specieId);
   });

   it("Test DELETE /register/:registerId", async () => {
    const userInitial = userBodyFactory();
    const user = await userFactory(userInitial);
    const token = await tokenFactory({ id: user.id, name: user.name, superuser: user.superuser });
    const specie = await specieFactory();

    const register = await registerFactory(user.id, specie.id);

    await server.delete(`/register/${register.id}`).set("Authorization", `Bearer ${token}`);

    const deletedRegister = await prisma.species.findUnique({
      where: { id: register.id }
    });

    expect(deletedRegister).toBeFalsy();
   });
});

afterAll(async () => {
  await disconnectPrisma();
});