
export const createImage = url =>
["core/image", {
        url: url
}]

export const createList = (ordered, values) =>
["core/list", {
        ordered: ordered,
        values: values
    }]

export const createQuote = content =>
["core/quote", {
        content: `<p>${content}</p>`
    }]

export const createHeading = level => content =>
["core/heading", {
        content: content,
        level: level
    }]

export const createParagraph = content =>
["core/paragraph", {
        content: content
    }]

export const blockRenderer = {
    aside: () => { throw new Error(`not implemented`) },
    blockquote: createQuote,
    h1: createHeading(1),
    h2: createHeading(2),
    h3: createHeading(3),
    h4: createHeading(4),
    h5: createHeading(5),
    h6: createHeading(6),
    p: createParagraph
}
    
