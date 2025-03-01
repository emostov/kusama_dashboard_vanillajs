
// https://stackoverflow.com/questions/494143/creating-a-new-dom-element-from-an-html-string-using-built-in-dom-methods-or-pro
export function stringToNode(inner) {
  const template = document.createElement('template');
  const html = inner.trim();
  template.innerHTML = html;
  return template.content.firstChild;
}

export function displayTime(now) {
  const time = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
  const date = now.toDateString();
  return `${date} ${time}`;
}

export function displayBlockTime(milSecs) {
  const now = new Date(milSecs);
  return displayTime(now);
}

export function displayCurrentTime() {
  const now = new Date(Date.now());
  return displayTime(now);
}

export function successMessage() {
  return stringToNode(`
          <div>
            <p class='c-msg'> &nbsp;&nbsp; <span>></span> &nbsp;Connection succesful.</p>
            <p  class='c-msg'> &nbsp;&nbsp; <span>></span> &nbsp;Blocks incoming.</p>
            <br/>
          </div>
        `);
}

export function displayBlock(block, terminal) {
  const {
    number,
    timeStamp,
    productionTime,
    extrinsicCount,
    hash,
    parentHash,
    author,
  } = block;

  const blockDiv = stringToNode(`
    <div id=${hash} class='glitch-outer'> 

      <div class='glitch-outer'> 
        <p class="b" >Block number: 
          <a href="https://polkascan.io/pre/kusama/block/${number}/">${number}</a>
        </p>
        <p class="b" >Block number:
          <a href="https://polkascan.io/pre/kusama/block/${number}/">${number}</a>
        </p>
        <p class="b" >Block number:
          <a href="https://polkascan.io/pre/kusama/block/${number}/">${number}</a>
        </p>
      </div>

      <div class='glitch-outer'>
        <p class="b">Hash: ${hash}</p>
        <p class="b">Hash: ${hash}</p>
        <p class="b">Hash: ${hash}</p>
      </div>

      <div class='glitch-outer'>
        <p class="b">Parent hash:
          <a href="https://polkascan.io/pre/kusama/block/${number - 1}/">${parentHash}</a>
        </p>
        <p class="b">Parent hash:
          <a href="https://polkascan.io/pre/kusama/block/${number - 1}/">${parentHash}</a>
        </p>
        <p class="b">Parent hash:
          <a href="https://polkascan.io/pre/kusama/block/${number - 1}/">${parentHash}</a>
        </p>
      </div>

      <div class='glitch-outer'>
        <p class="b">Time stamp: ${displayBlockTime(timeStamp * 1000)}</p>
        <p class="b">Time stamp: ${displayBlockTime(timeStamp * 1000)}</p>
        <p class="b">Time stamp: ${displayBlockTime(timeStamp * 1000)}</p>
      </div>

      <div class='glitch-outer'>
        <p class="b" >Author:
          <a href="https://polkascan.io/pre/kusama/account/${number}/">${author}</a>
        </p>
        <p class="b" >Author:
          <a href="https://polkascan.io/pre/kusama/account/${author}/">${author}</a>
        </p>
        <p class="b" >Author:
          <a href="https://polkascan.io/pre/kusama/account/${author}/">${author}</a>
        </p>
      </div>

      <div class='glitch-outer'> 
        <p class="b">Production Time: ${productionTime} secs</p>
        <p class="b">Production Time: ${productionTime} secs</p>
        <p class="b">Production Time: ${productionTime} secs</p>
      </div>

      <div class='glitch-outer'>
        <p class="b">Total extrinsics: ${extrinsicCount}</p>
        <p class="b">Total extrinsics: ${extrinsicCount}</p>
        <p class="b">Total extrinsics: ${extrinsicCount}</p>
      </div>
        
        <br/>
      </div>
      

    </div>
    `);


  terminal.append(blockDiv);
  blockDiv.scrollIntoView();
};

