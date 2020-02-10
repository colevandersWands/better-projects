# Madlib

A user enters a noun, a verb, and an adjective.  the program returns a funny sentence

* [live demo](https://colevanderswands.github.io/better-projects/separated/)

---

## Documentation



### Logic

| syntax | arugments | return value | behavior |
| --- | --- | --- | --- |
| `madlib(noun, verb, adjective)` | - noun (_String_) <br> - verb (_String_) <br> - adjective (_String_) <br> | _String_: a madlib made with user words | takes in a user-provided noun, verb & adjective. depending on the lengths of the words, it creates a different phrase |

### Handler

| syntax | behavior |
| --- | --- |
| `madlibHandler()` | 1. prompts the user to provide a noun, verb & adjective. <br> 2. generates a new madlib using the `madlib` function & user input. <br> 3. alerts the new madlib phrase <br> 4. logs user action for developers |

### DOM

| tag | attributes | role |
| --- | --- | --- |
| button | `id='madlib-button`, `class='play'` | users click this button to play the madlibs game |

### Listeners

| event type | attached to | callback |
| --- | --- | --- |
| "click" | `id='madlib-button` | `madlibHandler` |

### Styles

| selector | description |
| --- | --- |
| `.play` | positions the element and sets the font |

