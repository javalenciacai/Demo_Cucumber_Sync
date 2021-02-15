# Basic Calculator for Demonstrating SpecSync with SpecFlow

A basic Cucumber.js calculator project to demonstrate how to synchronize SpecFlow projects with TFS (Azure DevOps) with SpecSync


# Comandos

1. dotnet SpecSync --para ayuda

2. init - Initializes SpecSync configuration

3. push - Push changes of the scenarios on the local repository to the Azure DevOps
                          server. This by default includes linking of new scenarios to new test cases
                          (link) and updating test cases of linked scenarios (update).

4. pull - Pull changes from Azure DevOps server to the local repository. This by
                          default includes creation of new scenarios from unlinked test cases
                          (create) and changing scenarios of linked test cases (change).

5. publish-test-results - Publish local test results to Azure DevOps server.

6. help - Display more information on a specific command.

7. version - Display version information.