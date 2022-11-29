import { dbContext } from "../db/DbContext.js"
import { Forbidden } from "../utils/Errors.js"


class TodosService {
  async getAll(name) {
    const todos = await dbContext.Todos.find({ user: name })
    return todos
  }
  async create(body) {
    const todo = await dbContext.Todos.create(body)
    return todo
  }
  async edit(body) {
    const todo = dbContext.Todos.findById(body.id)
    todo.completed = body.completed !== null ? body.completed : todo.completed
    todo.description = body.description || todo.description
    await todo.save()
    return todo
  }
  async delete(name, id) {
    const todo = await dbContext.Todos.findById(id)
    if (todo.user.toString() !== name) {
      throw new Forbidden("This is not yours to delete.")
    }
    await todo.delete()
  }

}

export const todosService = new TodosService()