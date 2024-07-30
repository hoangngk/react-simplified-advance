export const parseLinkHeader = (linkHeader: string | null) => {
  if (!linkHeader) return {}
  const links = linkHeader.split(',')
  const parsedLinks = {} as Record<string, string>
  links.forEach((link: string) => {
    const urlMatch = link.match(/<(.*)>/)
    const relMatch = link.match(/rel="(.*)"/)
    if (urlMatch && relMatch) {
      const url = urlMatch[1]
      const rel = relMatch[1]
      parsedLinks[rel] = url
    }
  })

  return parsedLinks
}
