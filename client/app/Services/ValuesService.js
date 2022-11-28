import { ProxyState } from '../AppState.js'
import { Value } from '../Models/Value.js'
import { api } from './AxiosService.js'

class ValuesService {
  async getValues() {
    const res = await api.get('api/values')
    ProxyState.values = res.data.map(v => new Value(v))
  }

  async addValue() {
    const valueData = new Value({ title: `value ${Math.floor(Math.random() * 100)}` })
    const res = await api.post('api/values', valueData)
    ProxyState.values = [...ProxyState.values, new Value(res.data)]
  }

  async removeValue(valueId) {
    await api.delete(`api/values/${valueId}`)
    const values = ProxyState.values.filter(v => v.id !== valueId)
    ProxyState.values = values
  }
}

export const valuesService = new ValuesService()
