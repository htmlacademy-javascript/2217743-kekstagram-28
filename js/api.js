const successMessage = document.querySelector('#success').content
  .querySelector('.success');
const errorMessage = document.querySelector('#error').content
  .querySelector('.error');
const bodyNode = document.querySelector('body');

export const API = {
  url: {
    data: "https://28.javascript.pages.academy/kekstagram/data",
    post: "https://28.javascript.pages.academy/kekstagram",
  },
  async send(data) {
    const response = await fetch(this.url.post, {
      method: 'POST',
      credentials: 'same-origin',
      body: data,
    });

    if (!response.ok) {
      bodyNode.appendChild(errorMessage);
      errorMessage.querySelector('button').onclick = () => {
        bodyNode.removeChild(bodyNode.querySelector('.error'));
      }
      throw new Error(`Error address ${this.url.post}`);
    } else {
      bodyNode.appendChild(successMessage);
      successMessage.querySelector('button').onclick = () => {
        bodyNode.removeChild(bodyNode.querySelector('.success'));
      }
    }

    await response.json();
  },
  async get() {
    return await fetch(this.url.data).then(response => response.json());
  },
}

export const similarObjects = await API.get()
  .catch(err => console.log(err));

