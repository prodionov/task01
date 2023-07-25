import scrapeEvent from '../scrapeEvent'

const incorrectURL = 'https://horse-racing/monmouth-park/event/31907924'

describe('GIVEN scrapEvent is called', () => {
  afterEach(() => {})
  describe('WHEN we do not pass url', () => {
    it('THEN throw an error', async () => {
      // @ts-ignore
      await expect(scrapeEvent()).rejects.toThrow('Url is required')
    })
  })

  describe('WHEN url is not valid', () => {
    it('THEN throw an error', async () => {
      await expect(scrapeEvent(incorrectURL)).rejects.toThrow('Invalid url')
    })
  })
})
