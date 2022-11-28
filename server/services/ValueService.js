import { dbContext } from '../db/DbContext.js'

class ValuesService {
  async create(valueData) {
    const value = await dbContext.Values.create(valueData)
    return value
  }

  async find(query = {}) {
    const values = await dbContext.Values.find(query)
    return values
  }

  async remove(valueId) {
    const removedValue = await dbContext.Values.findByIdAndRemove(valueId)
    return removedValue
  }
}

export const valuesService = new ValuesService()
