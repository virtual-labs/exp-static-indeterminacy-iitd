### Theory

Kinematic indeterminacy refers to the number of independent displacements in a structure in terms of which all other displacements can be expressed. The degree of kinematic indeterminacy of a structure depends on its type (beam, frame, truss etc.)and the numbers and type of supports. The degree of kinematic indeterminacy (DKI) is also called as the degree of freedom. Determination of DKI is the first step in structural analysis using displacement methods such as the slope deflection method, the moment distribution method and the matrix/direct stiffness method.
<br><br>
 In contrast to static indeterminacy, which arises from an excess of unknown forces or moments, kinematic indeterminacy arises from unknown independent displacements (translations and rotations). The kinematic indeterminacy increases by introduction of members and is reduced by the addition of constraints or boundary conditions that restrict the possible deformations of the structure. For example, fixing one end of a beam compared to roller support can reduce the DKI of the structure. 
 <br>
The presence of internal hinges or deformable connections leads to increase in kinematic indeterminacy, as these elements introduce additional degrees of freedom that cannot be determined from the external loads and geometry alone. Kinematic indeterminacy can have practical implications for analysis and design of structures, as it can affect the distribution of internal forces and stresses and the overall stability of the structure. Overall, the degree of kinematic indeterminacy is an important factor to consider when analyzing and designing the structures.
<br><br>
<strong><u>Formula used to compute the degree of kinematic indeterminacy</u></strong> 
<strong>- Beams ------------- members are assumed inextensible beams and frames
- DKI for Plane Truss ------------ (2J - R)
- DKI for Plane Frame ------------ (3J - R) (Extensible member)
- DKI for Plane Frame with inextensible members ------------ (3J - R - C<sub>i</sub>)
- DKI for Plane Frame with inextensible members and releases ------------ (3j - R - C<sub>i</sub> + F) </strong><br><br>
                 J = No of joints, R = No. of reactions, C<sub>i</sub> = No. of conditions inextensibility, F = No. of releases

