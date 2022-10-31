Meeting held on 10/30/22:

> Read git docs on hosting a repo for SVN
        - According to git, we need to make the repo on github, checkout the repo through SVN,
          and proceed to use SVN to commit, add, import, etc.

> Look up how to use svn checkout from git
        - The Subversion Book says to use command 'svn checkout schema://repo.link/ <working dir>'
        - Since our repo is hosted on github we should be using https as the schema, and copy the
          github link to checkout.

> We should always use svn commands, not git anymore and should aggregate this to the others.
