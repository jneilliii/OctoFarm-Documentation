(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{408:function(t,a,s){"use strict";s.r(a);var e=s(27),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"linux-ubuntu"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#linux-ubuntu"}},[t._v("#")]),t._v(" Linux (Ubuntu)")]),t._v(" "),s("h2",{attrs:{id:"_1-prepare-your-system"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-prepare-your-system"}},[t._v("#")]),t._v(" 1 Prepare your system")]),t._v(" "),s("p",[t._v("First we need to prep the system for the required applications used to run OctoFarm.")]),t._v(" "),s("h3",{attrs:{id:"_1-1-setup-mongodb-s-repository"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-setup-mongodb-s-repository"}},[t._v("#")]),t._v(" 1.1 Setup MongoDB's repository")]),t._v(" "),s("ul",[s("li",[t._v("Add MongoDB's Repository Key\\")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("wget")]),t._v(" -qO - https://www.mongodb.org/static/pgp/server-4.4.asc "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" apt-key "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v("\n")])])]),s("ul",[s("li",[t._v("Add the MongoDB Repository (Choose by your current ubuntu version)\n20.04:")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/4.4 multiverse"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("tee")]),t._v(" /etc/apt/sources.list.d/mongodb-org-4.4.list\n")])])]),s("p",[t._v("18.08:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu bionic/mongodb-org/4.4 multiverse"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("tee")]),t._v(" /etc/apt/sources.list.d/mongodb-org-4.4.list\n")])])]),s("p",[t._v("16.04:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu xenial/mongodb-org/4.4 multiverse"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("tee")]),t._v(" /etc/apt/sources.list.d/mongodb-org-4.4.list\n")])])]),s("h3",{attrs:{id:"_1-2-setup-nodejs-lts-v14-repository"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-setup-nodejs-lts-v14-repository"}},[t._v("#")]),t._v(" 1.2 Setup NodeJS LTS v14 repository")]),t._v(" "),s("ul",[s("li",[t._v("Run the node repository setup")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -sL https://deb.nodesource.com/setup_14.x "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" -E "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("bash")]),t._v(" -\n")])])]),s("h3",{attrs:{id:"_1-3-update-apt-with-the-new-repository-s"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-update-apt-with-the-new-repository-s"}},[t._v("#")]),t._v(" 1.3 Update apt with the new repository's")]),t._v(" "),s("ul",[s("li",[t._v("Run the apt upgrade command")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" update\n")])])]),s("h2",{attrs:{id:"_2-install-octofarm-s-requirements"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-install-octofarm-s-requirements"}},[t._v("#")]),t._v(" 2. Install OctoFarm's requirements")]),t._v(" "),s("p",[t._v("If you've successfully run through all of the system prep for the repositories then we can continue to install the applications from them.")]),t._v(" "),s("h3",{attrs:{id:"_2-1-install-git"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-install-git"}},[t._v("#")]),t._v(" 2.1 Install Git")]),t._v(" "),s("ul",[s("li",[t._v("Install the git application")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v("\n")])])]),s("h3",{attrs:{id:"_2-2-install-mongodb-and-check-the-service-is-running"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-install-mongodb-and-check-the-service-is-running"}},[t._v("#")]),t._v(" 2.2 Install MongoDB and check the service is running")]),t._v(" "),s("ul",[s("li",[t._v("Install the mongodb application")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" mongodb-org\n")])])]),s("ul",[s("li",[t._v("Enable the mongodb service")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" systemctl "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("enable")]),t._v(" mongod\n")])])]),s("ul",[s("li",[t._v("Start the mongodb service")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" systemctl start mongod\n")])])]),s("ul",[s("li",[t._v("Check the service has actually started")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" systemctl status mongod\n")])])]),s("p",[t._v("You should see the system report back as 'active'")]),t._v(" "),s("h3",{attrs:{id:"_2-3-install-nodejs-and-check-the-version-is-correct"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-install-nodejs-and-check-the-version-is-correct"}},[t._v("#")]),t._v(" 2.3 Install NodeJS and check the version is correct.")]),t._v(" "),s("ul",[s("li",[t._v("Install the nodejs application")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt")]),t._v(" -y "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" nodejs gcc g++ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v("\n")])])]),s("ul",[s("li",[t._v("Double check we have the correct version (must be v14+)")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("node --version\n")])])]),s("p",[t._v("Example output: "),s("code",[t._v("v14.16.1")])]),t._v(" "),s("h3",{attrs:{id:"_2-4-update-npm-to-the-latest"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-update-npm-to-the-latest"}},[t._v("#")]),t._v(" 2.4 Update npm to the latest")]),t._v(" "),s("ul",[s("li",[t._v("Due to some update dependencies in V1.2+ we need to update our local npm version to the latest.")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("sudo npm install npm@latest -g\n")])])]),s("h3",{attrs:{id:"_2-5-install-pm2-service-manager"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-5-install-pm2-service-manager"}},[t._v("#")]),t._v(" 2.5 Install pm2 (Service Manager)")]),t._v(" "),s("ul",[s("li",[t._v('OctoFarm uses a process manager called \'pm2\'. Install it globally with the below command. OctoFarm\'s internal processes require this manager to action some internal commands like "Restart" and "Update".')])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("sudo npm install pm2 -g\n")])])]),s("h2",{attrs:{id:"_3-download-and-install-octofarm"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-download-and-install-octofarm"}},[t._v("#")]),t._v(" 3. Download and Install OctoFarm")]),t._v(" "),s("p",[t._v("After all that we can finally download OctoFarm from the latest release and start the service running.")]),t._v(" "),s("h3",{attrs:{id:"_3-1-download-octofarm"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-download-octofarm"}},[t._v("#")]),t._v(" 3.1 Download OctoFarm")]),t._v(" "),s("ul",[s("li",[t._v("We use git here to grab the latest master version of the application.")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone --depth "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" https://github.com/OctoFarm/OctoFarm.git\n")])])]),s("h3",{attrs:{id:"_3-2-change-into-the-new-octofarm-directory-and-start-the-service"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-change-into-the-new-octofarm-directory-and-start-the-service"}},[t._v("#")]),t._v(" 3.2 Change into the new OctoFarm directory and start the service")]),t._v(" "),s("ul",[s("li",[t._v("OctoFarm will have downloaded to your current directory, we now need to enter that folder and start it's service.")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" OctoFarm/\n")])])]),s("ul",[s("li",[t._v("Once inside the directory we can run the start command for OctoFarm")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" start\n")])])]),s("h2",{attrs:{id:"_4-profit"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-profit"}},[t._v("#")]),t._v(" 4 Profit!")]),t._v(" "),s("ul",[s("li",[t._v("You can double check the OctoFarm service is running by using "),s("code",[t._v("pm2 list")]),t._v(" from anywhere on your console. You should see:")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("┌─────┬─────────────┬─────────────┬─────────┬─────────┬──────────┬────────┬──────┬───────────┬──────────┬──────────┬──────────┬──────────┐\n│ id  │ name        │ namespace   │ version │ mode    │ pid      │ uptime │ ↺    │ status    │ cpu      │ mem      │ user     │ watching │\n├─────┼─────────────┼─────────────┼─────────┼─────────┼──────────┼────────┼──────┼───────────┼──────────┼──────────┼──────────┼──────────┤\n│ 0   │ OctoFarm    │ default     │ 1.1.14… │ fork    │ 2215     │ 20h    │ 0    │ online    │ 0%       │ 175.8mb  │ ubuntu   │ disabled │\n└─────┴─────────────┴─────────────┴─────────┴─────────┴──────────┴────────┴──────┴───────────┴──────────┴──────────┴──────────┴──────────┘\n")])])]),s("ul",[s("li",[t._v("OctoFarm runs on port 4000 by default. So you'll be able to access it in a web browser from:"),s("br"),t._v(" "),s("code",[t._v("http://{your systems ip address}:4000")])])]),t._v(" "),s("h2",{attrs:{id:"additional"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#additional"}},[t._v("#")]),t._v(" Additional")]),t._v(" "),s("p",[t._v("OctoFarms service is fully controllable from the cli, and you can also action restarts from the UI. It is not setup as persistent as default to do so please check the following documentation:\n"),s("RouterLink",{attrs:{to:"/installation/setup-service.html"}},[t._v("Service Setup")])],1)])}),[],!1,null,null,null);a.default=r.exports}}]);