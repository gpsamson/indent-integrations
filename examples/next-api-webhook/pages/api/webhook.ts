import { AutoRejectIntegration } from '@indent/dummy-webhook'
import { ExampleIntegration } from '@indent/example-webhook'
import { getNextHandler } from '@indent/provider-next'

export default getNextHandler({
  integrations: [
    new ExampleIntegration(),
    new AutoRejectIntegration({
      name: 'special-instance',
    }),
  ],
})
